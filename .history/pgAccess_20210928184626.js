require('dotenv').config()
const {Client} = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'http://localhost:5000',
  port: 5432,
  database: ''
})