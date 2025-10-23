import React, { useState, useContext, useReducer } from "react";
import "../assets/todoList.css";
import { DataContext } from "./DataContext.js";
//import { useNavigate } from "react-router-dom";

const TodoList = () => {
  //const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  // const [tasks, setTasks] = useState([]);
  const val = useContext(DataContext);
  //   const [tasks, setTasks] = useState([{ id: 2, task: "Check", isCompleted: false }]);

  const reducerFn = (state, action) => {
    let arr = [...state];
    switch (action.type) {
      case "ADD_TASK": {
        if (!inputText.trim()) return;
        let taskObj = {
          id: Date.now(),
          task: inputText.trim(),
          isCompleted: false,
        };
        arr.push(taskObj);
        return arr;
      }
      case "COMPLETE_TASK": {
        let arr = [...state];
        arr = arr.map((tsk) => {
          if (tsk.id === action.id) {
            tsk.isCompleted = !tsk.isCompleted;
          }
          return tsk;
        });
        return arr;
      }
    }
  };

  const [tasks, dispatchTasks] = useReducer(reducerFn, []);

  // const addTask = () => {
  //   if (!inputText.trim()) return;
  //   let taskObj = {
  //     id: Date.now(),
  //     task: inputText.trim(),
  //     isCompleted: false,
  //   };
  //   let arr = [...tasks];
  //   arr.push(taskObj);
  //   dispatchTasks({ type: "ADD_TASK", tasks: arr });
  //   setInputText("");
  // };

  // console.log(val);

  const completeTask = (id) => {
    let arr = [...tasks];
    arr = arr.map((tsk) => {
      if (tsk.id === id) {
        tsk.isCompleted = !tsk.isCompleted;
      }
      return tsk;
    });
    dispatchTasks({ type: "COMPLETE_TASK", tasks: arr });
  };

  const deleteTask = (e, id) => {
    e.stopPropagation();
    let arr = [...tasks];
    arr = arr.filter((tsk) => tsk.id !== id);
    dispatchTasks({ type: "DELETE_TASK", tasks: arr });
  };

  const editTask = (e, id, task) => {
    e.stopPropagation();
    let arr = [...tasks];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      let updatedTask = prompt("Update Task:", task);
      arr[idx] = {
        ...arr[idx],
        task: updatedTask,
      };
      dispatchTasks({ type: "EDIT_TASK", tasks: arr });
    }
  };

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (!userData?.token) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div class="container-task">
      <h1>ToDo List {val.value}</h1>
      <div class="input-box">
        <input value={inputText} onChange={(evt) => setInputText(evt.target.value)} type="text" id="taskInput" placeholder="Enter a Task" />
        <button id="addBtn" onClick={() => dispatchTasks({ type: "ADD_TASK" })}>
          {/* <button id="addBtn" onClick={() => val.setValue(inputText)}> */}
          Add
        </button>
      </div>
      <ul id="taskList">
        {tasks.map((tsk) => (
          <Task data={tsk} key={tsk.id} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask} />
        ))}
      </ul>
    </div>
  );
};

const Task = (props) => {
  const { data, completeTask, deleteTask, editTask } = props;
  return (
    <li className={data.isCompleted ? "completed" : ""} onClick={() => completeTask(data.id)}>
      {data.task}
      <button className="delete-btn" onClick={(e) => editTask(e, data.id, data.task)}>
        Edit
      </button>
      <button className="delete-btn" onClick={(e) => deleteTask(e, data.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoList;
