// "Enum" is applied where you have fixed set of possible values only .

// Real Application of Enums in Programming ->

// Enum (Enum stores the value , so Admin is stored at 0 , Similaryl Employee and Emanager at 1 and 2)
enum UserRole {
  Admin,
  Employee,
  Manager,
}

interface User {
  name: string;
  email: string;
  role: UserRole;
  salary: number;
}

let randomAdmin: User = {
  name: "Pushan Verma",
  email: "pushanverma.99@gmail.com",
  role: UserRole.Admin,
  salary: 40000,
};

let randomEmployee: User = {
  name: "Dheeraj Kandikattu",
  email: "kandikattudheeraj@gmail.com",
  role: UserRole.Employee,
  salary: 20000,
};

let randomManager: User = {
  name: "Dakshesh Gandhe",
  email: "gandheDakshesh@gmail.com",
  role: UserRole.Manager,
  salary: 10000,
};

function showDashboard(randomUser: User): void {
  if (randomUser.role === UserRole.Admin) { 
    console.log("....Admin Dashboard ");
  }

  if (randomUser.role === UserRole.Employee) {
    console.log("....Employee  Dashboard ");
  }

  if (randomUser.role === UserRole.Manager) {
    console.log("....Manager Dashboard ");
  }
}

showDashboard(randomAdmin);
showDashboard(randomEmployee);
showDashboard(randomManager);
