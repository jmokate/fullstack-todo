import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import Todo from "./Todo.js"

import './App.css';

function App() {
  const [input, setInput] = useState({todo: "", isChecked: false})
  const [items, setItems] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  
  const handleChange = (event) => {
    const {name, value} = event.target;

    setInput(prevInput => ({...prevInput, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems(prevItems => [...prevItems, input])
  }

  const handleIsChecked = (event) => {
    
    setIsChecked(input.isChecked = !isChecked)
  }

  console.log(items)
  const mapTodos = items.map(todoItem => <Todo text={todoItem.todo}
   checked={isChecked} 
   onChange={handleIsChecked} />)

 
  
  return (
    <div className="App">
      <h1>Todos</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control type="text" name="todo" value={input.todo} onChange={handleChange}></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
      </Form>
      {mapTodos}
      <h1>check box is {isChecked ? "true" : "false"}</h1>
    </div>
  );
}

export default App;
