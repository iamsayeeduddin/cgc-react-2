import React from "react";

const UserGreeting = (props) => {
  console.log(props);
  return <p>Welcome {(props.name || "User") + (20 + 3)}!</p>;
};

export default UserGreeting;
