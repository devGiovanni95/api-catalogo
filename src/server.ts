import express from "express"
import dotenv from "dotenv"
import routes from "./routes"
import cors from "cors"
import { AppDataSource } from "./database/data-source"

const port = process.env.PORT
dotenv.config()
AppDataSource.initialize().then(()=>{

    const app = express()
    
    app.use(cors({
        origin:['http://localhost:3000','https://api-catalogo-h0fl.onrender.com/']
    }))
    
    app.use(express.json())
    app.use(routes)
    
  return app.listen(port,()=>{
        console.log("Api is running")
    })

})
