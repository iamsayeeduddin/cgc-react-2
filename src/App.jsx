import React from "react";
import UserGreeting from "./components/UserGreeting";

const App = () => {
  let names = ["Sayeeduddin", "Ahmed", "Muneer"];

  return (
    <>
      <h1>REACT JS</h1>
      <div>
        <h1>Welcome to React JS!</h1>
        {names.map((name) => (
          <UserGreeting name={name} />
        ))}
      </div>
    </>
  );
};

export default App;
