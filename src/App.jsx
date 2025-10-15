import React, { useState } from "react";
import Cards from "./components/Cards";
import Home from "./components/Home";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ConditionalRender from "./utils/ConditionalRender";
import { Route, Routes, Link } from "react-router-dom";
import Products from "./components/Products";
import ProductOverview from "./components/ProductOverview";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Users</button> */}
      {/* <Home /> */}
      {/* <Cards /> */}
      {/* {show ? <UserList /> : null} */}
      {/* <TodoList /> */}
      {/* {show ? <Counter /> : null} */}
      {/* <ConditionalRender render={location.href.includes("users")}>
        <UserList />
        <p>Testing HOC</p>
      </ConditionalRender> */}
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>{" "}
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="users" element={<UserList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="/products/:productId" element={<ProductOverview />} />
        </Route>
        <Route path="*" element={<h2>Not Found!</h2>} />
      </Routes>
    </>
  );
};

export default App;
