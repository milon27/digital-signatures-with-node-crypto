import fs from 'fs';
import crypto from 'crypto';

let getHash = (content) => {
    let hash = crypto.createHash('md5');
    //passing the data to be hashed
    const data = hash.update(content, 'utf-8');
    //Creating the hash in the required format
    return data.digest('hex')
}
//Creating a readstream to read the file
let myReadStream = fs.createReadStream('./utils/degree.txt');

let rContents = '' // to hold the read contents;
myReadStream.on('data', function (chunk) {
    rContents += chunk;
});
myReadStream.on('error', function (err) {
    console.log(err);
});
myReadStream.on('end', function () {
    //Calling the getHash() function to get the hash
    let content = getHash(rContents);
    console.log('Content : ' + rContents);
    console.log('Hash : ' + content);
});