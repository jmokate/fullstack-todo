const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const {Client} = require('pg')
const client = new Client({
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
})
client.connect()
  .then(() => console.log("connected successfully to the database"))
  .catch((err) => console.log("there was an error", err))
  .finally(() => client.end())

//middleware parser
app.use(bodyParser.json())

app.post('/api/post', async (req,res) => {
   await console.log("the request is", req.body)
    res.send('hello there')
})

app.get('/api/get', (req,res) => {
  res.send('get path working')
})


app.listen(5000, () => console.log("app is listening on port 5000"))