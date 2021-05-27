import React from "react";

const ToDo = ({ todo }) => {
  return (
    <div  className="todolist"  id={todo.id} name="todo" value={todo.id}>
     {`<>  ${todo.task}`}
    </div>
  );
};

export default ToDo;
