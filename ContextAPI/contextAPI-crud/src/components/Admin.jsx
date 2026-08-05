import React, { useState , useContext} from "react";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "../context/EmployeeContext";

// let {employeeRecords,
//         addEmployee,
//         deleteEmployee,
//         updateEmployee} = useContext(EmployeeContext);

const Admin = () => {

  let {employeeRecords, addEmployee} = useContext(EmployeeContext);


  let [buttonClicked, setButtonClicked] = useState();

  let addCurrentEmployee = () => {
     addEmployee();
     console.log(employeeRecords,"....hello");
    console.log("...add Employee clicked");
    setButtonClicked("add");
   
  };

  let deleteEmployee = () => {
    console.log("...delete Employee clicked");
    setButtonClicked("delete");
  };

  let updateEmployee = () => {
    console.log("...update Employee clicked");
    setButtonClicked("update");
  };

  return (
    <div>
      <h1>Admin Page</h1>

      <button onClick={() => addCurrentEmployee()}>Add Employee</button>
      <button onClick={() => deleteEmployee()}>Delete Employee</button>
      <button onClick={() => updateEmployee()}>Update Employee</button>
      <br />
      <br />
      <br />

      {console.log(buttonClicked, "...buttonClicked")}

      {/* {buttonClicked === "add" && console.log("add hai bhai ")}
      {buttonClicked === "delete" && console.log("add hai bhai ")}
      {buttonClicked === "update" && console.log("updatehai bhai ")} */}

      {buttonClicked === "add" && (
        <>
          <p>Add the user details</p>
          <input type="text" placeholder="Enter Employee id" />
          <input type="text" placeholder="Enter First Name " />
          <input type="text" placeholder="Enter Last Name" />
          <input type="number" placeholder="Enter Age " />
          <input type="text" placeholder="Enter University" />
          <input type="text" placeholder="Enter Major" />
          <button>Submit </button>
        </>
      )}

      {["delete", "update"].includes(buttonClicked) && (
        <>
          <p> {buttonClicked} the user</p>
          <input type="text" placeholder="Enter Employee id " />
          <button>Submit </button>
        </>
      )}

      <EmployeeList />
    </div>
  );
};

export default Admin;
