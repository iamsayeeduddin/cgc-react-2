import React from "react";

const ConditionalRender = ({ children, render }) => {
  console.log(render);
  return render ? children : null;
};

export default ConditionalRender;
