import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item, handleCheck}) {

  const [listItemTextDecoration, setListItemTextDecoration] = useState("")

  // const returnIsCheckedValue = () => {    
  //   setIsChecked((item.checked = !item.checked))
  //   console.log('isChecked: ', item.checked)
  //   toggleLineThroughDecoration()
  // }

  // const toggleLineThroughDecoration = () =>{
  //   if (item.checked) {
  //     setListItemTextDecoration("line-through")
  //     console.log('checked prop ', listItemTextDecoration)
  //   } else {
  //     setListItemTextDecoration("none")
  //     console.log('list item decoration is ', listItemTextDecoration)
  //   }
  // }

  const checkValueThenDelete = (id) => {
    if (item.checked === false){
      return
    }
    if (item.checked === true){
      handleDelete(id);
    }
    setIsChecked(false)
  }

  // const strikeThrough = () => {
  //   item.checked ? setListItemTextDecoration("none") : setListItemTextDecoration("line-through")
  // }

  const listStyle = {
    listStyleType: "none",
    textDecoration: item.checked ? "line-through" : "none"
  }

  return(
    <>
      <Row>
        <Col>
          <input type="checkbox" 
           
            onChange={() => handleCheck(item.id)} />
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