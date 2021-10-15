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

   useEffect(() => {    
     GET_API();    
   }, [])

   const GET_API = async () => {
     await axios
       .get('/api/get')
       .then(response =>  {
         const responseItems = response.data
         setItems(responseItems)
       })
       .catch(err => console.log("error with front end GET ", err))
    }  

    

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      text: input
    }
    setItems([...items, todoItem])
    setInput('')
    createPost(todoItem)
    GET_API();
       
  }

  const handleCheck = (id) => {
    const checkedItem = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    )
    setItems(checkedItem)
  }

 const createPost = async (item) => {
   console.log(item)
   await axios
    .post('/api/post', item)
    .then(response => {
     console.log("the response", response.data) 
     
   }).catch(err => console.log(err))
 }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    axios.delete("/api/delete", id)
      .then(response => console.log('front end delete', response.data))
      .catch(err => console.log("error with delete ", err))
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
        handleCheck={handleCheck}
        setIsChecked={setIsChecked}
        items={items}
        isChecked={isChecked}
      />
    </div>
  );
}

export default App;