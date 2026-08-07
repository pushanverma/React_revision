import React, { useState, useContext, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "../context/EmployeeContext";
import { employees } from "../constants/EmployeeList";

// let {employeeRecords,
//         addEmployee,
//         deleteEmployee,
//         updateEmployee} = useContext(EmployeeContext);

const Admin = () => {
  let { employeeRecords, addEmployee } = useContext(EmployeeContext);

  let [userlist, setUserlist] = useState(employees);

  let userlistupdated = false;

  let [currentUser, setCurrentUser] = useState({});

  let [buttonClicked, setButtonClicked] = useState();

  let addCurrentEmployee = () => {
    //  addEmployee();
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

  let handleAddUser = () => {
    console.log("..Adding user");
    console.log(currentUser, "....currentUser");
    // employees.push(currentUser);
    setUserlist(userlist.push(currentUser));

    console.log(employees, "...Array after adding object");

    // Cleaning the Fields Now

    // List should be udpated now on employees page and Admin Page
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
          <input
            type="number"
            placeholder="Enter Employee id"
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                employee_id: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                first_name: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                last_name: e.target.value,
              }))
            }
          />
          <input
            type="number"
            placeholder="Enter Age "
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter University"
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                university: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter Major"
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                major: e.target.value,
              }))
            }
          />
          <button onClick={handleAddUser}>Submit</button>
        </>
      )}

      {["delete", "update"].includes(buttonClicked) && (
        <>
          <p> {buttonClicked} the user</p>
          <input type="text" placeholder="Enter Employee id " />
          <button onClick={() => handleUser}>Submit </button>
        </>
      )}

      <EmployeeList data={userlist} />
    </div>
  );
};

export default Admin;
