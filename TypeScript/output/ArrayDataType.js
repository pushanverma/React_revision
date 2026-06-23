"use strict";
//note: Array Types ususllay - Array of -> Integers(Numbers) , String , Boolean , 2d Array.  
Object.defineProperty(exports, "__esModule", { value: true });
//note: Declaration Type 1 
var students = ["pushan", "dheeraj", "dakshesh", "pradhap"];
var marks = [12, 13, 14, 15, 16, 17];
var flag = [true, false, true, false, false];
var students, pop;
();
console.log(students, "...1 student popped");
//note: Declaration Type 2
var student_name = ["pushan", "dheeraj", "dakshesh", "pradhap"];
var students_marks = [12, 13, 14, 15, 16, 17];
var student_flag = [true, false, true, false, true, true];
student_flag.push(false);
console.log(student_flag, "......saidByStudents");
student_name.push("Srikanth");
console.log(student_name, "...student_name");
//note: TUPLE 
// Since Arrays in Js can have any data-type so it can accumulate any value -> this is called TUPLE
var randomData = [1, "Pushan", true, null, undefined, '1abc'];
console.log(randomData, "......randomData");
//# sourceMappingURL=ArrayDataType.js.map