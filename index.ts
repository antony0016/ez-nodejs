import express from "express";
import cors from "cors";
import router from "./router";

const app = express();
const port = 5678;

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

app.use('/ez-test', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})