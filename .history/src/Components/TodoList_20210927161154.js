import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo.js"

const TodoList = ({items, handleDelete, setIsChecked, isChecked}) =>{


  return(
    
      <ul style={{flexDirection: 'row-reverse'}}>
        {items.map((item) => 
          
            <Todo
            style={{flexDirection: 'column-reverse'}}
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