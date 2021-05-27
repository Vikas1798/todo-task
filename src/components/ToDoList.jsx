import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList }) => {
  return (
    <div>
      <h3>
        {toDoList.map((todo) => {
          return (
            <>
              <ToDo todo={todo} />
              <br />
            </>
          );
        })}
      </h3>
    </div>
  );
};

export default ToDoList;
