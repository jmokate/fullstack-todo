const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgAccess = require('./pgAccess');
const todoAccess = require('./PostTodo.js');
const path = require("path");

pgAccess.connectToDb();


app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

app.get('/api/get', async (req, res) => {
  let getResponse = await todoAccess.getTodo();
  res.send(getResponse);
});

app.post('/api/post', async (req,res) => {
   const newTodoItem = req.body.text;
   await console.log("new todo item is ", newTodoItem);
   let result = await todoAccess.postTodo(newTodoItem);
   res.send(result);
});

app.put('/api/put', async(req, res) => {
  const checkedId = req.body.id;
  let result = await todoAccess.putTodo(checkedId);
  res.send(result);
});

app.delete(`/api/delete/:id`, async (req, res) => {
  const {id} = req.params;
  let result = await todoAccess.deleteTodo(id);
  console.log(result);
  res.send(result);
});



//serve static files
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(5000, () => console.log("app is listening on port 5000"))