## use node crypto to digitally sign any data.

>> End Points

- Generate public and private key
```
- REQ:  @GET http://localhost:2727/sign/gen-kp
- RES: {
        "publicKey": "",
        "privateKey": ""
    }

```
- Digitally Sign a data with private key
```
- REQ:  @POST http://localhost:2727/sign/
- BODY: {
        "data": "",
        "private_key": ""
    }

- RES: {
        "data": "",
        "signature": ""
    }  

```
- Verify data integrity with signature and public key
```
- REQ:  @POST http://localhost:2727/sign/
- BODY: {
        "data":"",
        "signature":"",
        "public_key":""
    }

- RES: {
        "integrity:true
    }  

```
>>> ---

>> use case

##### Q. Let's say we have an University IUBAT. They are giving degree to their student. Now they want to digitally sign their degree so that no one can duplicate their degree.

##### A. IUBAT will generate a private key and public key for their organization. Then give public key to every student or anyone who want to verify their degree. keep private key to secrate to sign all of their degree digitally.

* step 1: generate a hash for the degree
```
$ node ./utils/genHashForTxtFile.js

# degree content with hash 
Content : ID: 1234
Name: Milon27
Address: BD
CGPA: 3.80
Program: BCSE
University: IUBAT
Passing Year: 2021
Hash : 108ca49f7ff2a686c2a87b6639055016

```

* step 2: Now take that hash and sign that digitally using iubat private key.

```
use this end point: @POST http://localhost:2727/sign/
# so we got a signature.
```

* final step:If anyone wants to verify that degree file, just again hash that file with same algorithom and then take the hash,the signature and the public key to check the integraty.

example file degree.txt: 
```
file hash: bf85ac4b17c669593db48fac37f0a8ed
signature: bPo5vVfGeXGKyrUMw55MFmSaQ/8nYKPX+7E3Sdh2It4zVdaF5l7MTIpUCaeP1byjTXuP9UeJeYQUj0xX5wUjSA==
public key: -----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAK9XqN3j/4nG72HhVA7J1dPfolxZM59I\nFDlR9UwAZQjTlJKbItuJDGNPih+0wfmhu9ANHD5Rh6Nw8s9FVVcLAsUCAwEAAQ==\n-----END PUBLIC KEY-----\n
```
if we use these info to verify then we can see {
  "integrity": true
}

>>> ---


@author : milon27




