//topic:  Map data structure

//note: Map is used to store only the distinct values and it stores the value in the form of key-value pairs , if you try to add different values it will not add.
let map = new Map();

map.set("in", "India");
map.set("usa", "United states of America");
map.set("fr", "France");

// console.log(map, "...map ");

//topic: for-of loop

//note: for of on Arrays
let arr = [1, 2, 3, 4];

for (const element of arr) {
  //   console.log(element, "...element");
}

//note: for of on Strings
let str = "PushanVerma";

for (const alphabet of str) {
  //   console.log(alphabet, "....alphabet");
}

//note: for of on Map data structure
for (const key of map) {
  //   console.log(key);
}

for (const [key, value] of map) {
  //   console.log(key, " -> " + value);
}

//note: for of on Objects

let myObject = {
  first_name: "Pushan",
  last_name: "Verma",
  student_id: "123",
};

// for (const element of myObject) {
//   console.log(element, "....element");
// }

//topic : for-in loop

//note: for in loop on Objects

for (const key in myObject) {
  console.log(`${key} is the shortcut for ${myObject[key]}`);
}

//note: for in loop on Arrays
let names = ["pushan", "chetna", "chandresh", "aditi"];

for (const key in names) {
  console.log(key, "->", names[key]);
}

//note: for in loop on Maps(Nothing prints because map is not iterable )

for (let key in map) {
  console.log(key);
}

//topic : Callback functions

function greet(name, callbackFn) {
  console.log("Hello ", name);
  callbackFn();
}

function welcomeMessage() {
  console.log("Welcome to our startup - investowise! ");
}

greet("Pushan", welcomeMessage);
//note: Herer we are passing function as a argument, thats why callback function

//topic: forEach loop(forEach expect a callback function in return which takes 3 arguments 1st ->value, 2nd ->index, 3rd -> array )
let items = ["apple", "banana", "grapes"];

//note: 1st method(making a simple function inside forEach)
items.forEach(function (value) {
  console.log(value, "...value");
});

//note: 2nd method(making a arrow function inside forEach)
items.forEach((value) => {
  console.log(value, "....value2");
});

//note: 3rd method(making a function outside and invoking inside forEach)
function printMe(item) {
  console.log(item, "...value3");
}

items.forEach(printMe);

//note: forEach has 3 arguments inside callback function (value, index, arr)

items.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

//note: forEach loop with Objects

const myCoding = [
  {
    languageName: "Java",
    languageFileName: ".java",
  },
  {
    languageName: "JavaScript",
    languageFileName: ".js",
  },
  {
    languageName: "C++",
    languageFileName: ".cpp",
  },
  {
    languageName: "Python",
    languageFileName: ".py",
  },
];

myCoding.forEach((value) => {
  console.log(value.languageName, " has extensio -> ", value.languageFileName);
});
