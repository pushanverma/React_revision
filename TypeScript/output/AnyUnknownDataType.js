"use strict";
//note: 1.  Any Data Type Declaration
Object.defineProperty(exports, "__esModule", { value: true });
var data = "Pushan Verma"; // making Data String
// now the variable data can store "any" data type . It can store String , Number , Array , Object , Boolean values etc.
data = 12; // making Data number
data = true; // making Data Boolean
data = {
    username: "verma2599",
    email: "pushanverma.99@gmail.com",
    university: "Purdue University",
};
// making Data Object
data = [1, "Pushan Verma", "M", true]; // Making Data Array
// Since we dont have to specify the dataType in Any , does not mean we should use that everywhere .
// Q- Why "any" should be used limited ?
// Ans - "any" must be used in a limited amount becuase it removes the whole point of being a Type safety language , it becomes like the old JS .
// if a Object has only one key
//note: 2. Unkown Data Type Declaration
//(it is similar to Any data type , but the main difference is that unkown data Type has to be checked i.e Type has to be checked ).
var data1;
data1 = "Pushan Verma"; // making Data1 String 
data1 = 12; // making Data1 Number 
data1 = { username: "verma2599", email_id: "pushanverma.99@gmail.com" }; //// making Data1 Object 
data1 = [
    12,
    "pushanverma",
    true,
    function helloWorld() {
        console.log("HelloWorld");
    },
];
// making Data1 Array with different Data Types (as we can store anything inside Array)
console.log(data1, "...data1 before checking and pushing value ");
// Now inorder to use Data1 , you have to check the "TypeOF"
if (Array.isArray(data1)) {
    data1.push(24);
}
console.log(data1, "...data1 after checking and pushing value ->24 ");
//# sourceMappingURL=AnyUnknownDataType.js.map