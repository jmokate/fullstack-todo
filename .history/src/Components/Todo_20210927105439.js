import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo(props) {

  return(
    <>
    <Row>
      <Col><input type="checkbox" checked={props.checked} onChange={props.onChange} /></Col>
      <Col>
        <ul>
          <li style={{listStyleType: "none"}}>{props.text}</li>
          
        </ul>
      </Col>
      <Col>
        <Button onClick={props.onClick}>x</Button>
      </Col>
    </Row>
    
    
    </>
  )
}

export default Todo;