import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from  'typeorm'
import dotenv from 'dotenv'


dotenv.config()

export const AppDataSource = new DataSource({
  "type": "postgres",
  "host": process.env.HOST,
  "port": Number(process.env.DATABASE_PORT),
  "username": "postgres",
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
    entities: [`${__dirname}/**/models/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})