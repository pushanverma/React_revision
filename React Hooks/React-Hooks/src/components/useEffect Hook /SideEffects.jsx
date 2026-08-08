import React, { useEffect, useState } from "react";

// LifeCycle of a State is managed by a Single Hook -> useEffect.

const SideEffects = () => {
  //topic: componentDidMount() - Will run only once i.e When the component is rendered.
  useEffect(() => {
    console.log(".....Component Rendered Once ");
  }, []);

  //componentDidUpdate()- this will update , once the state changes.

  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  //topic: this will only run when the Name changes
  useEffect(() => {
    console.log("....Only Name changed");
  }, [name]);

  // this will only run when the Age changes
  useEffect(() => {
    console.log("....Only Age changed ");
  }, [age]);

  // this will run when either Name/ Age changes
  useEffect(() => {
    console.log("....Either Name or Age changed");
  }, [name, age]);

  //topic: componentWillUnMount() - the return part in the useEffect is the Unmount
  useEffect(() => {
    return () => {
      console.log("UnMounted");
    };
  }, []);

  return (
    <div>
      Understanding LifeCycle Methods replaced by UseEffect
      <div>
        <input
          type="text"
          placeholder="Enter Name .."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age..."
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffects;
