require('dotenv').config()
const {Client} = require('pg')
const client = new Client({
  user: process.env.HOST,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
})