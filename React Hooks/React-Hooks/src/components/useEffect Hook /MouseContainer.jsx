import React, { useState, useEffect } from "react";
import MouseMove from "./MouseMove";

const MouseContainer = () => {
  let [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}> Toggle </button>

      {display && <MouseMove />}
    </div>
  );
};

export default MouseContainer;
