import React, { useState, useEffect } from "react";

const MouseMove = () => {
  let [xpos, setXpos] = useState(0);
  let [ypos, setYpos] = useState(0);

  let logMousePositions = (e) => {
    console.log(e.clientX, e.clientY, "...logging mouse positions");
    setXpos(e.clientX);
    setYpos(e.clientY);
  };

  // this useEffect runs after every render , that means every time the X and Y co-ordinate changes
  //   useEffect(() => {
  //     console.log("...UseEffect is called");
  //     window.addEventListener("mousemove", logMousePositions);
  //   });

  // this useEffect runs only once, and since we have already told at first render that listen to the eventListener continously and it does.
  useEffect(() => {
    console.log("...UseEffect is called");
    window.addEventListener("mousemove", logMousePositions);
  }, []);

  return (
    <div>
      Mouse Co-ordinates are X -{xpos} and Y - {ypos}.
    </div>
  );
};

export default MouseMove;
