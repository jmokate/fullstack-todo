import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo.js"
import {Row} from "react-bootstrap"

const TodoList = ({items, handleDelete, setIsChecked, isChecked}) =>{


  return(
    
      <ul>
        <Row style={{flexDirection: 'row-reverse'}}>
        {items.map((item) => 
          
            <Todo
            key={item.id}
            handleDelete={handleDelete}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            item={item}
          />
        )}
        </Row>
      </ul>
  
  )
};

export default TodoList