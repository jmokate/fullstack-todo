import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"

import './App.css';

function App() {
  const [input, setInput] = useState({todo: ""})
  const [items, setItems] = useState([])
  
  const handleChange = (event) => {
    const {name, value} = event.target;

    setInput(prevInput => ({...prevInput, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems(prevItems => [...prevItems, input])
  }
  return (
    <div className="App">
      <h1>Todos</h1>

      <Form.Group onSubmit={handleSubmit}>
        <Form.Control type="text" name="todo" value={input.todo} onChange={handleChange}></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
    </div>
  );
}

export default App;
