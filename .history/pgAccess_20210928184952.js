require('dotenv').config()
const {Client} = require('pg')
const client = new Client({
  user: process.env.HOST,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
})
client.connect()
  .then(() => console.log("connected successfully to the database"))
  .catch((err) => console.log("there was an error", err))
  .finally(() => client.end())