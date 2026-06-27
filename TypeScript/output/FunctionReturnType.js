"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//note:Function which is returning Number
function SimpleOne() {
    return 100;
}
// console.log(SimpleOne(),"....SimpleOne");
//note: Function which is returning String
function SimpleTwo() {
    return "Hello Second Function";
}
// console.log(SimpleTwo(),"....SimpleTwo");
//note: Function which is returning Boolean
function SimpleThree() {
    return true;
}
// console.log(SimpleThree(),"....SimpleThree");
//note: Function which is returning Array (of different types , just comment and check )
//topic:( Number Array  , String Array , Boolean Array , Object , Function )
//1. Number Array
//  function SimpleFour(): number[] {
//     return [1,2,3,4];
//  }
//2. String Array
//  function SimpleFour(): string[]{
//     return ["Hello","my","name","is","Pushan","verma"];
//  }
//3. Boolean Array
// function SimpleFour(): boolean[]{
//     return [true, false , true , false , true , true];
// }
//note: Function which is returning Object
function SimpleFive() {
    return {
        first_name: "Pushan",
        last_name: "Verma",
    };
}
// console.log(SimpleFive(), "....SimpleFive");
//note: Function which is returning Function
function SimpleSix() {
    return function (name) {
        console.log("HelloWorld->", name);
    };
}
// () - represents the function which takes No parameter i.e SimpleSix , but the inside one takes
// : (name:String )=>void   ,  : means defining the return type So we can see that SimpleSix is retutring a function
// and the inside function takes a parameter called Name(String Type) and it returns nothing that's why "void".
// console.log(SimpleSix()("Pushan_Verma"),"....SimpleSix");
//note:  Function which is returning on basis of dataType that is being demanded ->
// Number | String | Boolean | Array(pick any type ) | Object | Function
// function SimpleSeven(
//   data: number | string | boolean | Array | object | function
// ): void | number | string | boolean | Array | object | function  {
//   //1. Number
//   if (typeof data == "number") {
//     console.log("...Inside Number");
//     return data;
//   }
//   //2. String
//   if (typeof data == "string") {
//     console.log("....Inside String");
//     return data;
//   }
//   //3. Boolean
//   if (typeof data == "boolean") {
//     console.log("....Inside Boolean");
//     return data;
//   }
//   //4. Array( Mixed of everything )
//   if (Array.isArray(data)) {
//     console.log(".....Inside Array");
//     return [
//       25,
//       true,
//       "pushan",
//       "C",
//       ["a", "e", "i", "o", "u"],
//       { fname: "pushan", lname: "verma" },
//       function () {
//         console.log("HelloWorld");
//       },
//     ];
//   }
//   //5. Object
//   if (typeof data === "object") {
//     console.log("....Inside Object");
//     data.lname="verma";
//     return data;
//   }
//   //6. Function
//   if(typeof(data)==="function"){
//     console.log("...Inside Function");
//     return data;
//   }
// }
// //1.  Number
// console.log(SimpleSeven(25), ".....SimpleSeven");
// //2. String
// console.log(SimpleSeven("Pushan_Verma"), ".....SimpleSeven");
// //3. Boolean
// console.log(SimpleSeven(true), "....SimpleSeven");
// //4. Array
// console.log(SimpleSeven([1, 2, 3]), "....SimpleSeven");
//5. Object
// console.log(SimpleSeven({ fname: "pushan" }), "....SimpleSeven");
//6. Function 
// console.log(SimpleSeven(function(){
//     console.log("Helloworld");
// }));
//# sourceMappingURL=FunctionReturnType.js.map