import React, { useState } from "react";
//data from json file
import data from "./db.json";
//components
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <h1> To Do List</h1>
      <ToDoForm addTask={addTask} />
      <br />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
