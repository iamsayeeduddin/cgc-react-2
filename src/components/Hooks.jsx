import React, { useCallback, useMemo, useRef, useState } from "react";

const Hooks = () => {
  const ref = useRef(0);
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  console.log("$$$$$---->", ref, count);

  const totalAmount = useMemo(() => 400 + 100 + count, [count]); // Memoization of a Value

  const fn = useCallback(() => {
    // Memoization of a Function
    console.log("TTTTTTT", count);
  }, [count]);

  return (
    <div className="flex gap-4">
      Hooks
      {totalAmount}
      <button
        onClick={(e) => {
          e.stopPropagation();
          ref.current += 1;
          console.log(inputRef);
          fn();
        }}
      >
        Increment
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCount(count + 1);
        }}
      >
        Increment 2
      </button>
      <input type="text" onChange={() => console.log(ref)} ref={inputRef} className="border-amber-200 border-2" />
    </div>
  );
};

export default Hooks;

// const input = document.getElementById("input");
