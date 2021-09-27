import React from "react";
import Todo from "./Todo"

const TodoList = ({items, input, handleDelete, setIsChecked, isChecked}) =>{
  return(
    <ul>
      {items.map((item) => {
        <Todo 
          key={item.id}
          handleDelete={handleDelete},
          setIsChecked={setIsChecked},
          isChecked={isChecked},
          input={input},
          item={item}
        />
      })}
    </ul>
  )
};

export default TodoList