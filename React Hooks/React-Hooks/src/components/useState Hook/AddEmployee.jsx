import React, { useState } from "react";

const AddEmployee = () => {
  let [employeeList, setEmployeeList] = useState([]);

  let [currentEmployee , setCurrentEmployee]= useState();

  let handleEmployee = () => {
    console.log("...handleEmployee called");
    setEmployeeList([...employeeList, {...currentEmployee}]);
   setCurrentEmployee({name : "deafdsfr"});
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Employee..."
        onChange={(e) => {
          setCurrentEmployee({ name: e.target.value });
        }}
      />

      <button onClick={handleEmployee}>Submit </button>

      {console.log(employeeList,"........employeelist")}

      {employeeList?.map((item, index) => {
        return <h1>{item?.name}</h1>;
      })} 
    </>
  );
};

export default AddEmployee;
