// console.log(".....Prototypal inheritance");

// note : Analyzing the ProtoTypal Chaining
// let h1 = document.querySelector("h1");
// console.dir(h1);

//note:--------------------------------------------------------------

// Studying about (Inheritance , super keyword and extends keyword)

class Person {
  living() {
    return "living life";
  }
}

class User extends Person {
  //Constructor ->
  constructor(firstName, lastName, age) {
    super(); // this will call the Parent class i.e Person
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Getter method ->

  get UserDetails() {
    return `Hello my name is ${this.firstName + " " + this.lastName} and my age is ${this.age}`;
  }

  // Setter method ->

  set UserDetails(value) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.age = value.age;
  }

  // Normal functions ->

  getBirthYear() {
    let date = new Date();
    let year = date.getFullYear();
    return year - this.age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age); // this will call the Parent Class i.e User
    this.grade = grade;
  }

  // Static block( static block will link to class directly - So School is associated with it )
  static {
    this.schoolName = "St Xaviers Sen Sec School ";
    this.SchoolDetails = function () {
      return `${this.schoolName} is the best school in Delhi , India`;
    };
  }

  // Student Class specific methods ->
  Study() {
    console.log(
      this.firstName +
        " is studying in " +
        this.grade +
        " grade." +
        " in " +
        Student.schoolName,
    );
    console.log(Student.SchoolDetails()); // Calling Static Method from normal method .
  }
}

class Employee extends User {
  constructor(firstName, lastName, age, salary) {
    super(firstName, lastName, age); // this will call the Parent class i.e User
    this.salary = salary;
  }

  static {
    this.company = "Google";
    this.companyDetails = function () {
      return `${this.company} is located in Palo Alto ,California `;
    };
  }

  // Employee Class specific methods ->
  Work() {
    console.log(Employee.companyDetails());
    return `${this.firstName} is working in ${Employee.company} and his salary is ${this.salary}`;
    s;
  }
}

//--------------- 1. Creating Person

// let person_1 = new Person();

// console.log(person_1, "...Person_1");
// person_1.living();  // Calling the Function inside Person class

//---------------- 2. Creating User
// let user_1 = new User("Pushan", "Verma", 25);

// user_1.living(); // testing if user can access Person class method

// console.log(user_1.living(), "...user_1 calling Person class method ");

// user_1.UserDetails = {
//   firstName: "Dakshesh",
//   lastName: "Gandhe",
//   age: 24,
// };
// console.log(user_1, "......user_1");
// console.log(user_1.UserDetails, "....user_1 Details"); // accessing the Getter function inside User class
// console.log(user_1.getBirthYear(user_1.age), "....user_1 getBirthYear");
// console.log(user_1.getFullName(), "....user_1 getFullName");

//-------------- 3. Creating Student

// let student_1 = new Student("Dakshesh", "Gandhe", 24, "7th");

// student_1.living(); // Accessing the Person class method

// console.log(student_1, "........Student_1");

//Setting user Details ->
// student_1.UserDetails = {
//   firstName: "Dheeraj",
//   lastName: "Kandikattu",
//   age: 28,
//   grade: "11th",
// };

// console.log(student_1.UserDetails, "....getting the user details of user"); // Accessing the Getter function in User

// student_1.Study();

//---------------- Creating Employee

// let employee_1 = new Employee("Bosu Bade ", "Babu", 28, 4000);

// console.log(employee_1, "....employee_1");

// console.log(employee_1.living(), ".....Accessing Employee_1 "); // Accessing the Person Living method

// // Accessing user Class setter function
// employee_1.UserDetails = {
//   firstName: "Pushan",
//   lastName: "Verma",
//   age: 26,
//   salary: 5000,
// };

// // Accessing user Class getter function
// console.log(employee_1.UserDetails, "......getting user Details"); 

// // Employee Class Method ->
// employee_1.Work();


































