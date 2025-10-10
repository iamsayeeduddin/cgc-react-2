import React, { useState } from "react";
import "../assets/todoList.css";

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  //   const [tasks, setTasks] = useState([{ id: 2, task: "Check", isCompleted: false }]);

  const addTask = () => {
    if (!inputText.trim()) return;
    let taskObj = {
      id: Date.now(),
      task: inputText.trim(),
      isCompleted: false,
    };
    let arr = [...tasks];
    arr.push(taskObj);
    setTasks(arr);
    setInputText("");
  };

  const completeTask = (id) => {
    let arr = [...tasks];
    arr = arr.map((tsk) => {
      if (tsk.id === id) {
        tsk.isCompleted = !tsk.isCompleted;
      }
      return tsk;
    });
    setTasks(arr);
  };

  const deleteTask = (e, id) => {
    e.stopPropagation();
    let arr = [...tasks];
    arr = arr.filter((tsk) => tsk.id !== id);
    setTasks(arr);
  };

  return (
    <div class="container-task">
      <h1>ToDo List</h1>
      <div class="input-box">
        <input value={inputText} onChange={(evt) => setInputText(evt.target.value)} type="text" id="taskInput" placeholder="Enter a Task" />
        <button id="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul id="taskList">
        {tasks.map((tsk) => (
          <li className={tsk.isCompleted ? "completed" : ""} key={tsk.id} onClick={() => completeTask(tsk.id)}>
            {tsk.task}
            <button className="delete-btn" onClick={(e) => deleteTask(e, tsk.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
