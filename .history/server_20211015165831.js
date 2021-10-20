const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pgAccess = require('./pgAccess')
const todoAccess = require('./PostTodo.js');
const path = require("path")

pgAccess.connectToDb();


app.use(express.static(path.join(__dirname, "client/build")));
//middleware parser
app.use(bodyParser.json())

app.get('/api/get', async (req, res) => {
  await console.log('get request initiated')
  let getResponse = await todoAccess.getTodo()
  res.send(getResponse)
})

app.post('/api/post', async (req,res) => {
   
   const newTodoItem = req.body.text;
   await console.log("new todo item is ", newTodoItem)
 
   await todoAccess.postTodo(newTodoItem);
})

app.put('/api/put', async(req, res) => {
  console.log('api put reached')
  console.log(req.body)
  const {checkedId} = req.body
  console.log(id)
  
})

app.delete(`/api/delete/:id`, async (req, res) => {
 
  console.log("the params are ",req.params)
  const {id} = req.params
  console.log("the id is ",id)
  //await todoAccess.deleteTodo(id)
  
})



//serve static files
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(5000, () => console.log("app is listening on port 5000"))