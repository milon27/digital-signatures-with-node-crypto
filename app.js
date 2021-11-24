import express from 'express'
import { signRouter } from './api/router/signRouter.js'


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    // res.cookie("test-me-cookie", "milon", {
    //     sameSite: 'none',
    //     secure: true,
    //     maxAge: 365 * 24 * 60 * 60 * 1000
    // })
    res.send("ok")
})

app.use('/sign', signRouter)


app.listen(2727, () => console.log("running app"))