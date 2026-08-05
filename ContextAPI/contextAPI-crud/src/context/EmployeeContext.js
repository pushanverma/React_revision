import { createContext } from "react";
import { employees } from "../constants/EmployeeList";

// 1 . Creating the Context
export const EmployeeContext = createContext();

// 2. making the Provider Function to make the syntax look easy
export const EmployeeProvider = ({ children }) => {
  let [employeeRecords, setEmployeeRecords] = useState(employees);

  let addEmployee = (employee) => {
    setEmployeeRecords((prev) => [...prev, employee]);
  };

  let deleteEmployee = (id) => {
    console.log("...deleting the employee with id ", id);
  };

  let updateEmployee = (id) => {
    console.log("Updating the employee with id ");
  };
  return (
    <EmployeeContext.Provider
      value={{
        employeeRecords,
        addEmployee,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
