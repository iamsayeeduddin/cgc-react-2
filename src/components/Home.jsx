import React from "react";
import UserGreeting from "./UserGreeting";
import Counter from "./Counter";

const Home = () => {
  let names = ["Sayeeduddin", "Ahmed", "Muneer"];

  return (
    <>
      <h1>REACT JS</h1>
      <div>
        <h1>Welcome to React JS!</h1>
        {names.map((name, idx) => (
          <UserGreeting key={idx + name} name={name} />
        ))}
        <Counter initCount={0} changeValue={1} />
        <Counter initCount={10} changeValue={5} />
      </div>
    </>
  );
};

export default Home;
