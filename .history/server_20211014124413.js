const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pgAccess = require('./pgAccess')
const postTodoAccess = require('./PostTodo.js');
const path = require("path")

pgAccess.connectToDb();


app.use(express.static(path.join(__dirname, "client/build")));
//middleware parser
app.use(bodyParser.json())

app.post('/api/post', async (req,res) => {
   
   const newTodoItem = req.body.text;
   await console.log("new todo item is ", newTodoItem)
    //res.send('hello there')
   await postTodoAccess.postTodo(newTodoItem);
 // console.log("the returned item is ", returnedItem);
})

app.get('/api/get', (req,res) => {
  res.send('get path working')
})

//serve static files
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(5000, () => console.log("app is listening on port 5000"))