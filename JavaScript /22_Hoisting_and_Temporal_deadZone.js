//---------WITH VARIABLES--------

//HOIST - means moving up , pulling up things

//1. with var

// console.log(a);
// var a=10;

// op - output of the above program is "undefined" , because during hoisting all the variables are pulled up and in memory phase , "var" variables are initialized with value "undefied".

//2.with let and const

// console.log(b);
// console.log(c);
// let b = 10;
// const c = 20;

//-------------------------------- WITH FUNCTIONS --------------------------------------

//1. "Normal function"
// (will be stored inside Global function )

// printName();

// function printName() {
//   console.log("Hello my name is Pushan");
// }


//2. Arrow function(var , let and const)

// console.log(printName1,"....printName1");

//note: Arrow function is treated as another variable(so whole function definition is not stored in case of var it is stored in GLobal and )
// (Arrow function )

// debugger;

// //var Arrow Function - will not be treated as function(so undefined stored) and stored inside Global Scope
// var printName1=()=>{
//     console.log("Pushan Verma , inside var variable arrow function ");
// }

// //let Arrow Function - will not be treated as function(so undefined stored , since let so TDZ and stored inside Script Scope 
// let printName2=()=>{
//     console.log("Pushan Verma , inside let variable arrow function ");
// }

// //const Arrow Function - will not be treated as function(so undefined stored , since let so TDZ and stored inside Script Scope 
// const printName3=()=>{
//     console.log("Pushan Verma , inside const variable arrow function ");
// }


//3. function inside variable(var , let and const -seperately)
//note: It will behave just like Arrow function( function definition is not stored , only initialized with undefined )

debugger;

// var(Function inside variable )- will be treated as variable and not function and stored in Global Scope
var getName1 = function(){
    console.log("Pushan Verma , inside 'var' variable arrow function ")
}

//let(Function inside variable)- will be treated as variable and not function and stored in Script Scope
let getName2=function(){
     console.log("Pushan Verma , inside 'let' variable arrow function ")
}

//const(Function inside variable)- will be treated as variable and not a function and stored in Script Scope
const getName3=function(){
     console.log("Pushan Verma , inside 'const' variable arrow function ")
}




