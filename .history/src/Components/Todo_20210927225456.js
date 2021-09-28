import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item}) {

  const [styles, setStyles] = useState("none")

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
    setIsChecked(false)
  }

  const setListStyle = () =>{
    let listStyle = {
      listStyleType: "none",
      textDecoration: item.checked ? "line-through" : "none"
    }
    console.log("list style check ", item.checked)
    setStyles(listStyle)
  }
  

  // const listStyle = {
  //   listStyleType: "none",
  //   textDecoration: setListStyle
  // }

  return(
    <>
      <Row>
        <Col>
          <input type="checkbox" onClick={returnIsCheckedValue} />
        </Col>
        <Col >
          <li style={{setListStyle}} ><h4>{item.text}</h4></li>
        </Col>
        <Col>
          <Button onClick={() => checkValueThenDelete(item.id)}>x</Button>
        </Col>
      </Row>
    </>
  )
}

export default Todo;