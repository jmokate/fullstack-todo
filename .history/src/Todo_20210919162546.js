import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup} from "react-bootstrap";

function Todo(props) {

  return(
    <>
    
    <h1>{props.text}</h1>
    <h2>???</h2>
    </>
  )
}

export default Todo;