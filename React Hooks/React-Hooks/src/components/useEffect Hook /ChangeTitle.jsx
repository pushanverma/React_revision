import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title  ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Title changed {count} times</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Change Button{" "}
      </button>
    </div>
  );
};

export default ChangeTitle;
