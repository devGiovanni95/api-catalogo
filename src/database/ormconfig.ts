import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

const dataBase = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE || './src/database/database.sqlite',
  entities: [
    './src/models/*.ts'
  ],
  logging: true, // log das queries executadas
  synchronize: true // cria as tabelas automaticamente
})

dataBase.initialize()
  .then(() => {
    console.log(`Database initialized`);
  })
  .catch((err) => {
    console.error(`Database dont initialized`, err);
  })

export default dataBase