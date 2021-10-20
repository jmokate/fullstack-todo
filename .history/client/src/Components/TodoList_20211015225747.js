import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo.js"
import {Row} from "react-bootstrap"

const TodoList = ({items, handleDelete, setIsChecked, isChecked, handleCheck}) =>{

  
  return(
      
      <ul>
        <Row style={{flexDirection: 'column-reverse'}}>
        { items.sort((a,b) => a.id - b.id)
          .map((item) => 
          
            <Todo
            key={item.id}
            handleDelete={handleDelete}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            item={item}
            handleCheck={handleCheck}
          />
        )}
        </Row>
      </ul>
  
  )
};

export default TodoList