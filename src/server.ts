import express from "express"
import dotenv from "dotenv"
import dataBase from "./database/ormconfig"
import routes from "./routes"
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors({
    origin:['http://localhost:3000','https://api-catalogo-h0fl.onrender.com/']
}))

app.use(express.json())
app.use(routes)

app.listen(port, ()=> {
    console.log("Api is running")
    console.log(`Database `, dataBase.isInitialized ? 'initialized' : 'dont initialized')
})
