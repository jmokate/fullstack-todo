import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo.js"

const TodoList = ({items, input, handleDelete, setIsChecked, isChecked}) =>{


  return(
    
      <ul>
        {items.map((item) => return {
          <Todo 
            key={item.id}
            handleDelete={handleDelete}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            input={input}
            item={item}
          />
        })}
      </ul>
  
  )
};

export default TodoList