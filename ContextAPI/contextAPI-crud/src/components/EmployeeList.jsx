import React, { useState } from "react";
import { employees } from "../constants/EmployeeList";

const EmployeeList = () => {
  console.log(employees, ".....employeeList");
  const [employeelist, setEmployeeList] = useState(employees);

  return (
    <div>
      {employeelist.map((employee, index) => {
        return (
          <>
            <h3>{employee.first_name}</h3>
            <p>{employee.last_name}</p>
            <p >{employee.age}</p>
            <p>{employee.university}</p>
            <p >{employee.major}</p>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default EmployeeList;
