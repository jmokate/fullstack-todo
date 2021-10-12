const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./pgAccess')

//middleware parser
app.use(bodyParser.json())

app.post('/api/post', async (req,res) => {
   
   const newTodoItem = req.body;
   await console.log("new todo item is ", newTodoItem)
    res.send('hello there')
})

app.get('/api/get', (req,res) => {
  res.send('get path working')
})


app.listen(5000, () => console.log("app is listening on port 5000"))