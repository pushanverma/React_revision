"use strict";
//note: Declaration of Null Data Type 
var randomData = null;
console.log(typeof (randomData), "...typeOf randomData before assigning values "); // object 
var isloggedIn = true;
if (isloggedIn) {
    randomData = "Pushan Verma loves chai and code";
}
console.log(typeof (randomData), "...typeOf randomData after assigning values "); //string 
console.log("----------------------------------------------------");
//note: Declaration of Undefined Data Type 
var randomData2 = undefined;
console.log(typeof (randomData2), "...typeOf randomData2 before assigning values "); // undefined
randomData2 = "Hello !  Pushan Verma loves chai and code ";
console.log(typeof (randomData2), "...typeOf randomData2 before assigning values "); // string 
//note: Comparing equal to(==) and Strict equal to(===) 
var val1 = null;
var val2 = undefined;
console.log(val1 == val2, "....comparing null and undefined"); // true 
console.log(val1 === val2, "....Strict comparing null and undefined"); //false 
