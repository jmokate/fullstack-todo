const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pgAccess = require('./pgAccess')
const postTodoAccess = require('./PostTodo.js');

pgAccess.connectToDb();

//middleware parser
app.use(bodyParser.json())

app.post('/api/post', async (req,res) => {
   
   const newTodoItem = req.body.text;
   await console.log("new todo item is ", newTodoItem)
    //res.send('hello there')
  let returnedItem = await postTodoAccess.postTodo(newTodoItem);
  console.log("the returned item is ", returnedItem);
})

app.get('/api/get', (req,res) => {
  res.send('get path working')
})

//serve static files
app.use(express.static(path.join(__dirname, "/client/build")))

app.listen(5000, () => console.log("app is listening on port 5000"))