import express from "express";
import cors from "cors";

const app = express();
const port = 1234;

app.use(
    express.json()
)

app.use(
    cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
    })
)

app.post('/test/command', (req, res) => {
    console.log(req.body);

    res.json({
        status: 200,
        message: 'success',
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})