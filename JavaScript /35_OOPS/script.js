//note : Procedural Programming -> Example of Procedural Programming

// const user1 ={
//     first_name : "Pushan",
//     last_name : "Verma",
//     age : 26
// }

// function getBirthYear(age){
//     let date = new Date();
//     let year = date.getFullYear();

//     return (year-age);
// }

// console.log(getBirthYear(user1.age),".....birthYear");

//note: Object Oriented Programming -> How to turn a Procedural Program to a Object Oriented Program

// const user2 ={
//     first_name : "Pushan",
//     last_name : "Verma",
//     age : 26,
//     getBirthYear : function (){
//         let date = new Date();
//         let year = date.getFullYear();
//         return (year-user2.age);
//     }
// }

// console.log(user2.getBirthYear(),".......getBirthYear");

//note : What is Factory Functions and What is the need of them ?

// const user3 = {
//   first_name: "Pushan",
//   last_name: "Verma",
//   age: 26,
//   getBirthYear: function () {
//     let date = new Date();
//     let year = date.getFullYear();
//     return year - user3.age;
//   },
// };

// const user4 = {
//   first_name: "Chandresh",
//   last_name: "Verma",
//   age: 45,
//   getBirthYear: function () {
//     let date = new Date();
//     let year = date.getFullYear();
//     return year - user4.age;
//   },
// };

// console.log(user3.getBirthYear(),"...user3 birth year");
// console.log(user4.getBirthYear(),"....user4 birth year");

// Here we are creating objects everytime , suppose if we have to create 100 objects ,
//  then 100 new getBirthYear functions will be created .
//  The function body remains the same but the code will be saved new for every object and
// that is wastage of memory.
// Therefore , we need Factory Functions (make a machine and similar products can come out of it .)

//note: Factory Functions

// function createUser(firstName, lastName, age) {
//   let user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getBirthYear: function () {
//       let date = new Date();
//       let year = date.getFullYear();
//       return year - user.age;
//     },
//   };

//   return user;
// }

// let user_1 = createUser("Pushan", "Verma", 26);
// let user_2 = createUser("Dheeraj", "Kandikattu", 56);
// let user_3 = createUser("Bosu bade", "babu", 32);

// console.log(user_1.getBirthYear(), "....Pushan");
// console.log(user_2.getBirthYear(), "....Dheeraj");
// console.log(user_3.getBirthYear(), "....Bosu");

// // comparing the functions - (checking are they same or not ? )
// console.log(
//   user_1.getBirthYear === user_2.getBirthYear,
//   "...Comparing the functions- will be False",
// );

//note: Fixing the Above problem (Storing the same function in 2 different Objects )

// console.log(this, "....this in global space");

// function getBirthYear() {
//   console.log(this, ".....this inside getBirthYear");
//   let date = new Date();
//   let year = date.getFullYear();
//   return year - this.age;
// }

// function createNewUser(firstName, lastName, age) {
//   let user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getBirthYear,
//   };
//   return user;
// }

// let user_a = createNewUser("Pushan", "Verma", 26);
// let user_b = createNewUser("Dakshesh", "Gandhe", 24);

// console.log(user_a.getBirthYear(), "....Pushan age");
// console.log(user_b.getBirthYear(), "....Dakshesh age");

// // comparing the functions - (checking are they same or not ? )
// console.log(
//   user_a.getBirthYear === user_b.getBirthYear,
//   ".....Comparing the functions - will be True",
// );

//note: After solving the above problem, we have introduced one more problem ->

// Probem 1:-> We have voiltaed the Abstraction (we can access the getBirthYear() function outside also )

// Here we can see the entire body of the function and
// console.log(getBirthYear, "...looking the function body ");
// console.log(getBirthYear(), "...calling the functionn ");

// Since we know that function is also a object internally and can store Key-Value Pair.
// Making a key name getBirthYear and getFullName and storing the function there
// and accessing in the function createStudent.

// function createStudent(firstName, lastName, age) {
//   let user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getBirthYear: createStudent.commonMethods.getBirthYear,
//     getFullName: createStudent.commonMethods.getFullName,
//   };

//   return user;
// }

// createStudent.commonMethods = {
//   getBirthYear: function () {
//     let date = new Date();
//     let year = date.getFullYear();
//     return year - this.age;
//   },

//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// let user_x = createStudent("Aditi", "Verma", 23);
// let user_y = createStudent("Chandresh", "Verma", 22);

// console.log(user_x.getBirthYear(), "...Birth data of ", user_x.firstName);
// console.log(user_y.getBirthYear(), "...Birth data of ", user_y.firstName);

// console.log(user_x.getFullName(), "...Full name of ", user_x.firstName);
// console.log(user_y.getFullName(), "...Full name of ", user_y.firstName);

// // Comparing the functions from both the objects

// console.log(
//   user_x.getBirthYear === user_y.getBirthYear,
//   ".....Comparing the functions - will be True",
// );

// console.dir(createStudent, "...createStduent");
// console.log(createStudent.prototype, "...ProtoType of createStudent");
//getBirthYear and getFullName are stored inside createStudent's ProtoType

// Here we have succesfully hided the function (getBirthYear and getFullName) and achieved the Abstraction again,
// but all this work can be done using ProtoTypes
// "ProtoTypes" is a property which will always be present inside the Function(can check using console.dir command)
// It also stores the constructor function .

// Learning about the "ProtoType" property inside the function and "new" Keyword (Explained in Notion notes)

//note: Every function contains the protoType Property (can view with console.dir command)
//note: new Keyword always return Object ,even though you have returned (String / Number / Array )etc. It will always return a Object. - see in Notes for example.
//note: this keyword also behaves differently (1.Without new Keyword 2. With new Keyword)-see in Notes for example.

//note: Constructor Function (i.e calling with New keyword )

function CreateNewEmployee(firstName, lastName, age) {
  console.log(this, "...this inside CreateNewEmployee");

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// these functions getBirthYear and getFullName will be saved inside the PrototType of CreateNewEmployee
CreateNewEmployee.prototype.getBirthYear = function () {
  console.log(this, "....Object incoming ");
  let date = new Date();
  let year = date.getFullYear();
  return year - this.age;
};

CreateNewEmployee.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

let emp_1 = new CreateNewEmployee("Pushan", "Verma", 26);
let emp_2 = new CreateNewEmployee("Chandresh", "Verma", 27);
let emp_3 = new CreateNewEmployee("Aditi", "Verma", 28);

console.log(emp_1.getBirthYear(), "...emp_1 getBirthYear");
console.log(emp_2.getBirthYear(), "...emp_2 getBirthYear");
console.log(emp_3.getBirthYear(), "...emp_3 getBirthYear");

//note: The protoTypes that are made with the function CreateNewEmployee() i.e getBirthYear and getFullName will also be copied inside the object emp_1 and emp_2 but with a different name (__proto__).
//note: that means ProtoType of CreateNewEmployee is inherited by emp_1 and emp_2.

console.log(emp_1.__proto__, "...protoType of emp_1");
console.log(emp_2.__proto__, "...protoType of emp_2");
console.log(emp_3.__proto__, "...protoType of emp_3");
