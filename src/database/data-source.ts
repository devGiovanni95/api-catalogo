import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.DATABASE_PORT as number | undefined
export const AppDataSource = new DataSource({
  type: 'postgres',
  host:  process.env.HOST,
  port: port,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
      entities: [`${__dirname}/**/models/*.{ts,js}`],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  logging: true, // log das queries executadas
  synchronize: true // cria as tabelas automaticamente
})
