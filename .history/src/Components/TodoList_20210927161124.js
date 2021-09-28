import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo.js"

const TodoList = ({items, handleDelete, setIsChecked, isChecked}) =>{


  return(
    
      <ul style={{flexDirection: 'column-reverse'}}>
        {items.map((item) => 
          
            <Todo
            key={item.id}
            handleDelete={handleDelete}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            item={item}
          />
        )}
      </ul>
  
  )
};

export default TodoList