import React, { useMemo, useReducer, useState } from "react";

const Calculator = () => {
  const [valA, setValA] = useState("");
  const [valB, setValB] = useState("");

  const [result, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        if (!valA || !valB) return "";
        return parseInt(valA) + parseInt(valB);
      case "SUBTRACT":
        if (!valA || !valB) return "";
        return parseInt(valA) - parseInt(valB);
      case "MULTIPLY":
        if (!valA || !valB) return "";
        return parseInt(valA) * parseInt(valB);
      default:
        return state;
    }
  }, "");

  const val = useMemo(() => 10, []);

  console.log("tesr");

  return (
    <div>
      {result ? <p>Result: {result}</p> : null}
      <input className="border-2 border-amber-800" type="text" value={valA} onChange={(e) => setValA(e.target.value)} />
      <input className="border-2 border-amber-800" type="text" value={valB} onChange={(e) => setValB(e.target.value)} />

      <div className="flex gap-4">
        <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>
        <button onClick={() => dispatch({ type: "MULTIPLY" })}>Multiply</button>
      </div>
    </div>
  );
};

export default Calculator;
