import express from 'express'

import routes from './routes'
import { AppDataSource } from './database/data-source'

AppDataSource.initialize().then(()=> {
    const app = express()

    app.use(express.json())
    app.use(routes)

   return app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
    console.log(`Database `, AppDataSource.isInitialized ? 'initialized' : 'is dont initialized')
   })
})