import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item, input}) {

  const returnIsCheckedValue = () => {
    setIsChecked((item.checked = !item.checked))
    console.log('isChecked: ', item.checked)
  }

  return(
    <>
    <input type="checkbox" onClick={returnIsCheckedValue} />
      
          <li style={{listStyleType: "none"}}>{props.text}</li>
      
        <Button onClick={props.onClick}>x</Button>
    </>
  )
}

export default Todo;