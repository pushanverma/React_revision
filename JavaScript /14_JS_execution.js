//topic: Understanding "Diagramatically"

// let val1 =10;
// let val2=15;

// function addNumber(val1, val2){
//     let result =val1+val2;
//     return result;
// }

// let result1=addNumber(val1,val2);
// let result2=addNumber(50,60);

// console.log(result1,"...result_1");
// console.log(result2,"....result_2");

//topic: Understanding Practically through Chrome_Dev_Tools(variables and functions )

debugger;

sayHi();

//variables

var userId = 123;

let username = "pushanVerma";

const userAge = 25;

//functions

function sayHi() {
  const a = 2;
  const b = 3;
  console.log("Value of a and b in sayHi Function -> ", a, " & ", b);
  add(6, 7);
}

function add(a, b) {
  console.log("Value of a and b in sayHi Function -> ", a, " & ", b);
  return a + b;
}

console.log("--------------Program Ended -------------------");

// global.console.log(".....global.console")
// globalThis.console.log(" ....globalThis.console");
