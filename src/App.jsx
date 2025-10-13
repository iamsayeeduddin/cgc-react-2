import React, { useState } from "react";
import Cards from "./components/Cards";
import Home from "./components/Home";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Users</button>
      {/* <Home /> */}
      {/* <Cards /> */}
      {show ? <UserList /> : null}
      {/* <TodoList /> */}
      {/* {show ? <Counter /> : null} */}
    </>
  );
};

export default App;
