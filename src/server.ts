import express from "express"
import dotenv from "dotenv"
import dataBase from "./database/ormconfig"

dotenv.config()
const app = express()
const port = process.env.PORT

app.listen(port, ()=> {
    console.log("Api is running")
    console.log(`Database `, dataBase.isInitialized ? 'initialized' : 'dont initialized')
})
