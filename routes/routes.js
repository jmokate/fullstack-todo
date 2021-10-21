const express = require('express');
const router = express.Router();
const todoAccess = require('../database/DatabaseQueries');
require('../pgAccess');


router.get('/', async (req, res) => {
  let getResponse = await todoAccess.getTodo();
  res.send(getResponse);
});

router.post('/', async (req,res) => {
   const newTodoItem = req.body.text;
   let result = await todoAccess.postTodo(newTodoItem);
   res.send(result);
});

router.put('/', async(req, res) => {
  const checkedId = req.body.id;
  let result = await todoAccess.putTodo(checkedId);
  res.send(result);
});

router.delete(`/:id`, async (req, res) => {
  const {id} = req.params;
  let result = await todoAccess.deleteTodo(id);
  res.send(result);
});

module.exports = router;