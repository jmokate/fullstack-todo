import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import TodoList from "./Components/TodoList.js"
import './App.css';
import axios from "axios";


function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  // useEffect(async () => {
  //   await axios.get('/api/get')
  // }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      text: input,
      checked: isChecked,
      id: Date.now()
    }
    setItems([...items, todoItem])
    setInput('')
    createPost(todoItem)
  }

 const createPost = (item) => {
   axios.post('api/post', {
     let testItem = item
   }).then(response => {
     console.log(response.data)
   })
 }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }
  console.log(items)
  
  return (
    
    <div className="App">
      <h1>Todos</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control 
        type="text"
        name="input" 
        value={input} 
        onChange={e => setInput(e.target.value)}></Form.Control>
        <Button type="submit">Add</Button>
      </Form.Group>
      </Form>
      <TodoList
        handleDelete={handleDelete}
        //handleIsChecked={handleIsChecked}
        setIsChecked={setIsChecked}
        items={items}
        isChecked={isChecked}
      />
    </div>
  );
}

export default App;