"use strict";
// "Enum" is applied where you have fixed set of possible values only .
Object.defineProperty(exports, "__esModule", { value: true });
// Real Application of Enums in Programming ->
// Enum 
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Employee"] = 1] = "Employee";
    UserRole[UserRole["Manager"] = 2] = "Manager";
})(UserRole || (UserRole = {}));
let randomAdmin = {
    name: "Pushan Verma",
    email: "pushanverma.99@gmail.com",
    role: UserRole.Admin,
    salary: 40000,
};
let randomEmployee = {
    name: "Dheeraj Kandikattu",
    email: "kandikattudheeraj@gmail.com",
    role: UserRole.Employee,
    salary: 20000,
};
let randomManager = {
    name: "Dakshesh Gandhe",
    email: "gandheDakshesh@gmail.com",
    role: UserRole.Manager,
    salary: 10000,
};
function showDashboard(randomUser) {
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
//# sourceMappingURL=Enum.js.map