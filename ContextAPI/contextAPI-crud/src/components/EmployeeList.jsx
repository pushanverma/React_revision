import React, { Fragment, useState } from "react";
// import { employees } from "../constants/EmployeeList";

const EmployeeList = ({data}) => {
  const [employeelist, setEmployeeList] = useState(data);

  return (
    <div>
      {employeelist?.map((employee, index) => {
        return (
          <Fragment key={index}>
            <h3>Employee id - {employee.employeed_id}</h3>
            <p>
              Name - {employee.first_name} {employee.last_name}
            </p>
            <p> Age - {employee.age}</p>
            <p> University - {employee.university}</p>
            <p>Major - {employee.major}</p>
            <hr />
          </Fragment>
        );
      })}
    </div>
  );
};

export default EmployeeList;
