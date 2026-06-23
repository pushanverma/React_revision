"use strict";
//note : Declaration of Tuple Data Type 
Object.defineProperty(exports, "__esModule", { value: true });
var employeedata = ["pushan", 25, true, 1999, "verma"];
employeedata.push("software Developer");
// Unlike Array , where we have to only enter homogeneous Data Types , here we can actually enter like OG Js but we have to specify the data Types . 
// Tuple works in such a way that , pushing 
console.log(employeedata, "....employeedata after pushing");
// [ 'pushan', 25, true, 1999, 'verma', 'software Developer' ] ....employeedata after pushing
employeedata.pop();
console.log(employeedata, "....employeedata after popping");
// [ 'pushan', 25, true, 1999, 'verma' ] ....employeedata after popping
// But we can also control the pushing and popping of elements by writing "readonly"
// var employeedata: readonly [string , number , boolean , number , string]=["pushan", 25,true, 1999, "verma"];
//# sourceMappingURL=TupleDataType.js.map