//topic----------------------------Functions---------------------------------

//note:1. Normal function

//a. without arguments (i- without return keyword ii- with return keyword)
function sayHi() {
  console.log("hello this is normal function without arguments in  Js");
}

// function sayHi() {
//   console.log("hello this is normal function without arguments in  Js");
//   return "PushanVerma";
// }

// sayHi();

//b.with arguments

function sayHi2(username, age) {
  console.log(
    `Hello ${username} of age ${age} , this is a normal function with arguments in Js`
  );
}
// sayHi2("Pushan Verma",25);

//note:2. Function inside variable(var , let and  const)

// var sayHello = function () {
//   console.log("hello this is  function inside var variable  in Js");
// };

// let sayHello = function () {
//   console.log("hello this is  function inside let  variable  in Js");
// };

// const sayHello = function () {
//   console.log("hello this is  function inside const   variable  in Js");
// };

//note:3.Arrow Functions 

//a. Syntax

// let sayHi = () => {
//   console.log("Hello Pushan verma ");
// };

//b. arguments keyword (we cannot use arguments keyword in Arrow function, we can use Rest operator instead)

// let addNumber=()=>{
//   console.log(arguments,"...arguments");
// }

// let sum =0;

// let addNumber=(...numbers)=>{

//   for(let i=0;i<numbers.length;i++){
//     sum=sum+numbers[i];
//   }
//   console.log(sum);
// }

// addNumber(1,2,3,4,5,6,7,8,9,10);

//c. Hoisting (Arrow function are not hoisted, we cannot use them before initilization.)

let sayHello = () => {
  console.log("Hello Pushan verma");
};

sayHello(); // you can only make a call after intialization , making a call before function definition is not possible here.

//d.this keyword

let sayHello2=()=>{
  let name ="Verma_Pushan_2599";
  console.log(this,"...this inside sayHello arrow function");
  console.log(this.name,"...this.name inside sayhello arrow function");
}

sayHello2();



//topic:-------------------------------------Rest operator--------------------------

//note: 1. Passing 'n' number of values in argument
function printNumber(...num) {
  console.log(num);
}
//if you want to print only one value, this syntax is ok
// printNumber(200);

// if you have to pass multiple values to a function use REST operator(...)
// printNumber(100, 200, 300, 400);

//note:2.Passing defined arguments and not defined arguments

function printNumber1(val1, val2, ...num) {
  console.log(num);
}
// printNumber1(1, 2, 3, 4, 5, 6);
// here 1 goes in val1 , 2 goes in val2 and rest of the values in num

//note:3.Passing objects in function

let obj = {
  name: "Pushan Verma",
  college: "BPIT",
};

function getDetails(myObj) {
  return `Student name is ${myObj.name} and studying in ${myObj.college} college`;
}

// console.log(getDetails(obj));

// console.log(
//   getDetails({
//     name: "Chandresh Verma",
//     college: "ADJITM",
//   })
// );

//note:4.Passing arrays in function

let arr = [10, 98, 30, 67, 50];

function maxValue(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(maxValue(arr));
// console.log(maxValue([10, 98, 30, 67, 50]));
