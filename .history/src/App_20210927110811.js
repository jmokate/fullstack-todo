import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import Todo from "./Components/Todo.js"
import TodoList from "./Components/TodoList.js"

import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  //const [id, setId] = useState(0)
  
  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setInput(prevInput => ({...prevInput, [name]: value, id: Date.now(), isChecked: false}))
  // }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      text: input,
      checked: isChecked,
      id: Date.now()
    }
    setItems(prevItems => [...prevItems, todoItem])
    setInput('')
  }

  const handleIsChecked = (event) => {
    console.log(items)
    
  }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
    //setItems(newList)
  }

  console.log(items)
  const mapTodos = items.map(todoItem => <Todo text={todoItem.todo}
   onChange={handleIsChecked} 
   //onChange={handleIsChecked}
   onClick={handleDelete} />)

 
  
  return (
    
    <div className="App">
      {handleIsChecked}
      <h1>Todos</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control type="text" name="todo" value={input.todo} onChange={handleChange}></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
      </Form>
      {mapTodos}
      {/* <h1>check box is {isChecked ? "true" : "false"}</h1> */}
    </div>
  );
}

export default App;
