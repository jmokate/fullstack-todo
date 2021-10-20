import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item, handleCheck}) {

  const checkValueThenDelete = (id) => {
    if (item.is_checked === false){
      return
    }
    if (item.is_checked === true){
      handleDelete(id);
    }
    setIsChecked(false)
  }

  const listStyle = {
    listStyleType: "none",
    textDecoration: item.is_checked ? "line-through" : "none"
  }
  const checkChecked = (item) {
    if (item.is_checked){
      return true
    } else {
      return false
    }

  }

  return(
    <>
      <Row>
        <Col>
          <input type="checkbox" onChange={() => handleCheck(item.id)} checked={checkChecked(item)} />
        </Col>
        <Col >
          <li style={listStyle} ><h4>{item.text}</h4></li>
        </Col>
        <Col>
          <Button onClick={() => checkValueThenDelete(item.id)}>x</Button>
        </Col>
      </Row>
    </>
  )
}

export default Todo;