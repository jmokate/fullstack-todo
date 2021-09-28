import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from "react-bootstrap";

function Todo({setIsChecked, handleDelete, item, isChecked}) {

  const [checkedProp, setCheckedProp] = useState("")

  const returnIsCheckedValue = () => {

    
    setIsChecked((item.checked = !item.checked))
    console.log('isChecked: ', item.checked)
    if (item.checked){
      setCheckedProp("line-through")
    console.log('checked prop ', checkedProp)
    }
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