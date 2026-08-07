import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Count = {count}</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => count>0 ?  setCount(count - 1) : setCount(0)}>-</button>
          <button onClick={() => setCount(0)}> Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
