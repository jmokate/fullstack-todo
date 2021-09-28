import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import TodoList from "./TodoList.js"

function Todo({setIsChecked, handleDelete, item, input, key}) {

  const returnIsCheckedValue = () => {
    setIsChecked((item.checked = !item.checked))
    console.log('isChecked: ', item.checked)
  }

  const checkValueThenDelete = (id) => {
    if (item.checked === false){
      return
    }
    if (item.checked === true){
      handleDelete(id);

    }
  }

  return(
    <>
      <input type="checkbox" onClick={returnIsCheckedValue} />
      
        <li style={{listStyleType: "none"}}>{item.text}</li>
      
        <Button onClick={() => checkValueThenDelete(key)}>x</Button>
    </>
  )
}

export default Todo;