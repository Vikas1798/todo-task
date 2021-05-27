import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inputfield"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      &nbsp; &nbsp;
      <button className="addbutton">+</button>
    </form>
  );
};

export default ToDoForm;
