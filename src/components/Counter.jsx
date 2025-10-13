import React, { useState, useEffect } from "react";
import "../assets/Counter.css";

const Counter = (props) => {
  const { initCount, changeValue } = props;
  //   let count = 0;
  let [count, setCount] = useState(initCount || 0);

  const increment = () => {
    setCount(count + (changeValue || 1));
  };

  const decrement = () => {
    setCount(count - (changeValue || 1));
  };

  useEffect(() => {
    console.log("In UseEffect");

    return () => {
      console.log("Component Unmounted!");
    };
  }, [count]);

  console.log("Outside useEffect");

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button className="btn" style={{ color: "white" }} onClick={decrement}>
        -
      </button>
      <p>{count}</p>
      <button className="btn" style={{ color: "white" }} onClick={increment}>
        +
      </button>
      {count > 10 ? <span>Conditionally Rendered</span> : ""}
    </div>
  );
};

export default Counter;
