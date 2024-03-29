import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import TodoList from "./Components/TodoList.js"
import './App.css';
import axios from "axios";


function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [is_checked, setIsChecked] = useState(false);

   useEffect(() => {    
     GET_API();    
   }, []);

   const GET_API = async () => {
     await axios
       .get('/api/get')
       .then(response =>  {
         const responseItems = response.data
         setItems(responseItems);})
       .catch(err => console.log("error with front end GET ", err));
    }  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input || input.trim() == "") {
      alert("Please enter a todo");
    } else {
      const todoItem = {
        text: input
      }
      setItems([...items, todoItem]);
      setInput('');
      createPost(todoItem);
    }  
  };

  const handleCheck = (id) => {   
    const checkedItem = items.map(item => 
      item.id === id ? {...item, is_checked: !item.is_checked} : item
    );
    setItems(checkedItem);
    putIsChecked(id);
  };

  const putIsChecked = async (id) => {
    await axios.put('/api/put', {id})
      .then(response =>  console.log("put from server", response.data))
      .catch(err => console.log('put error ', err));
  };

 const createPost = async (item) => {
   await axios
    .post('/api/post', item)
    .then(response =>  
      console.log("the response", response.data))
    .catch(err => console.log(err));
    GET_API();
 };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    deletePost(id);
  };

  const deletePost = async (id) => {
   const deleteUrl = `/api/delete/${id}`
    await axios.delete(deleteUrl)
      .then(response => console.log('front end delete', response.data))
      .catch(err => console.log("error with delete ", err));
  };

  
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
        <Button type="submit" disabled={input === null}>Add</Button>
      </Form.Group>
      </Form>
      <TodoList
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        setIsChecked={setIsChecked}
        items={items}
        isChecked={is_checked}
      />
    </div>
  );
};

export default App;
