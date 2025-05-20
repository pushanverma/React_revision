//topic:methods to declare objects
//1. Object.create(this is a singelton object)

//2. Object literals(this is not a singelton object)
let user = {
  name: "pushan",
  fullname: "pushan verma",
  age: 25,
  location: "jaipur",
  email: "pushanverma.99@gmail.com",
  isLoggedIn: true,
};

//how to access objects -->
// console.log(user.email, "...email ");
// console.log(user["email"], "...email ");

//Updating values in object
user.email = "pushanverma@google.com";
// console.log(user.email, "...email updated ");

//Freezing object , so that nobody could update value
// Object.freeze();

user.name = "Iron man";

// console.log(user, "...user object");

//functions in objects

user.greeting = function () {
  console.log("Hello user ");
};

// console.log(user.greeting, "..greeting");
// console.log(user.greeting(), "...greeting function call");

// Function using object instance (using this to access object values)
user.greetingWithName = function () {
  console.log(`Hello ${this.name}`);
};

// console.log(user.greetingWithName());

const instgram = {};
instgram.id = "abc123";
instgram.name = "pushan";
instgram.isLoggedIn = true;

console.log(instgram, "...instagram \n\n");

let regularUser = {
  email: "some@gmail.com",
  fullname: {
    regularfullName: {
      firstName: "Pushan",
      lastName: "Verma",
    },
  },
};

console.log(regularUser, "...regular User");
console.log(regularUser?.fullname?.regularfullName?.firstName, "...firstName");

//Combining objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

let combinedObject = Object.assign({}, obj1, obj2, obj3);

console.log(combinedObject, "...combinedObject");

//spread operator
let combinedObject2 = { ...obj1, ...obj2, ...obj3 };
console.log(combinedObject2, "...combinedObject2");

//Array of Object

let user2 = [
  { name: "pushan", id: 1 },
  { name: "rajender", id: 2 },
  { name: "ramesh", id: 3 },
  { name: "chandresh", id: 4 },
];

console.log(user2, "...user object");
console.log(Object.keys(user2), "...object keys");
console.log(Object.values(user2), "....object values");

//hasOwnProperty

console.log(user2.hasOwnProperty("name"), "...hasOwnProperty");

//destructing of objects

let user3 = {
  name: {
    firstName: "pushan",
    lastName: "verma",
  },
  id: 123,
  gender: "Male",
  schoolName: "BPIT",
  course: "CSE",
  bacth: "2018-2022",
  location: "Delhi, India",
};

console.log(user3, "....user3");

const {
  name: { firstName: studentName },
  gender: sex,
} = user3;

console.log(studentName, "<---studentName and gender---->", sex);
