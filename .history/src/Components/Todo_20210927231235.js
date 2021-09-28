import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item}) {

  const [styles, setStyles] = useState({})

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

  useEffect(() => {
      let newStyles = {
      listStyleType: "none",
      textDecoration: item.checked ? "line-through" : "none"
    }
      setStyles({newStyles})
    
  },[styles])

  // const setListStyle = () =>{
  //   setStyles(item.checked ? "line-through")
  // }
  

  // const listStyle = {
  //   listStyleType: "none",
  //   textDecoration: item.checked ? "line-through" : "none"
  // }

  return(
    <>
      <Row>
        <Col>
          <input type="checkbox" onClick={returnIsCheckedValue} />
        </Col>
        <Col >
          <li style={styles} ><h4>{item.text}</h4></li>
        </Col>
        <Col>
          <Button onClick={() => checkValueThenDelete(item.id)}>x</Button>
        </Col>
      </Row>
    </>
  )
}

export default Todo;