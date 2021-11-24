import { Router } from 'express';
import crypto from 'crypto'

export const signRouter = Router()

const SIGN_ALGO = "RSA-SHA256"

//use private_kay to sign the data.
signRouter.post('/', (req, res) => {
    const { data, private_key } = req.body
    const sign = crypto.createSign(SIGN_ALGO)
    sign.update(data)
    sign.end()

    const signature = sign.sign(private_key).toString('base64')

    res.send({ data, signature })
})

//verify the data with public key
signRouter.post('/verify', (req, res) => {
    const { data, signature, public_key } = req.body
    const verify = crypto.createVerify(SIGN_ALGO)
    verify.update(data)
    verify.end()

    const result = verify.verify(public_key, Buffer.from(signature, 'base64'))
    res.send({
        integrity: result
    })
})

//generate public and private key
signRouter.get('/gen-kp', (req, res) => {
    const {
        publicKey,
        privateKey,
    } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 512,//4096
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    res.send({
        publicKey,
        privateKey,
    })
})
