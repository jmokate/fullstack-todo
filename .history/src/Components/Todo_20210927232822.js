import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item, isChecked}) {

  const [checkedProp, setCheckedProp] = useState(item.checked ? "line-through" : "none")

  const returnIsCheckedValue = () => {
    setCheckedProp(checkedProp)
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

  // useEffect(() => {
  //     let newStyles = {
  //     listStyleType: "none",
  //     textDecoration: item.checked ? "line-through" : "none"
  //   }
  //     setStyles({newStyles})
    
  // },[])

  // const setListStyle = () =>{
  //   setStyles(item.checked ? "line-through")
  // }
  

  const listStyle = {
    listStyleType: "none",
    textDecoration: checkedProp
  }

  return(
    <>
      <Row>
        <Col>
          <input type="checkbox" onClick={returnIsCheckedValue} />
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