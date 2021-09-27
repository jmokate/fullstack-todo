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
  
  //same as e => setInput(event.target.value) on the onChange ??
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
    setItems(items.filter((item) => item.id !== id));
    //setItems(newList)
  }

  console.log(items)
  // const mapTodos = items.map(todoItem => <Todo text={todoItem.todo}
  //  onChange={handleIsChecked} 
  //  //onChange={handleIsChecked}
  //  onClick={handleDelete} />)

 
  
  return (
    
    <div className="App">
      <h1>Todos</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control type="text" name="input" value={input} onChange={e => setInput(e.target.value)}></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
      </Form>
      <TodoList
        handleDelete={handleDelete},
        handleIsChecked={handleIsChecked},
        setIsChecked={setIsChecked},
        items={items},
        isChecked={isChecked}
      />
      
    </div>
  );
}

export default App;
