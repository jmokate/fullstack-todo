import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Row, Col} from "react-bootstrap";

function Todo(props) {

  return(
    <>
    <Row>
      <Col><input type="checkbox" /></Col>
      <Col>
        <ul>
          <li>{props.text}</li>
        </ul>
       
      </Col>
    </Row>
    
    
    </>
  )
}

export default Todo;