import React, { useContext, useEffect, useState } from "react";
import Cards from "./components/Cards";
import Home from "./components/Home";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ConditionalRender from "./utils/ConditionalRender";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Products from "./components/Products";
import ProductOverview from "./components/ProductOverview";
import Login from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { DataContext } from "./components/DataContext.js";
import Calculator from "./components/Calculator.jsx";
import Hooks from "./components/Hooks.jsx";

const App = () => {
  const [show, setShow] = useState(true);
  const [userData, setUserData] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));

  const [value, setValue] = useState(10);

  useEffect(() => {
    if (user?._id) {
      setUserData(user);
    }
  }, []);

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
      <A />
      <Hooks />
      <DataContext.Provider value={{ value, setValue }}>
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
            <Link to="/products">Products {value}</Link>
          </li>{" "}
          {userData?.token ? null : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="users" element={<UserList />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="/products">
            <Route
              index
              element={
                <ProtectedRoute userData={userData}>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProtectedRoute userData={userData}>
                  <ProductOverview />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={userData?.token ? <Navigate to="/" /> : <Login setUserData={setUserData} />} />
          <Route path="*" element={<h2>Not Found!</h2>} />
        </Routes>
      </DataContext.Provider>
    </>
  );
};

const A = () => {
  const val = useContext(DataContext);
  return <p className="text-red-800">{val}</p>;
};

export default App;
