import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo(props) {

  return(
    <>
    <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      
          <li style={{listStyleType: "none"}}>{props.text}</li>
      
        <Button onClick={props.onClick}>x</Button>
    </>
  )
}

export default Todo;