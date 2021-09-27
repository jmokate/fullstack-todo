import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import Todo from "./Todo.js"

import './App.css';

function App() {
  const [input, setInput] = useState({todo: ""})
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
    console.log(event)
    setIsChecked(!isChecked)
  }

  console.log(items)
  const mapTodos = items.map(todoItem => <Todo text={todoItem.todo} checked={isChecked} onChange={handleIsChecked} />)

 
  
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
      
    </div>
  );
}

export default App;
