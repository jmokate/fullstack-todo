require('dotenv').config()
const {Client} = require('pg')
const config = {
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
}
// client.connect()
//   .then(() => console.log("connected successfully to the database my friends"))
//   .catch((err) => console.log("there was an error", err))
//   .finally(() => client.end())

  const clientConnection = new Client(config);

module.exports={clientConnection}
