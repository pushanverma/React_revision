"use strict";
//note:declaration of Number data Type
var num1 = 12;
//note: Re- declare issue with Blocked Scoped Data Types (let and const )
let num2 = 15;
//note: Adding two numbers(here we have not declared dataType to total but it becomes number , this is called Type Inference )
var total = num1 + num2;
console.log(total, "...total");
//note:Octal , Binary and Hexadecimal Numbers
var octalNumber = 0o100001;
var hexaDecimalNumber = 0b00001;
var binaryNumber = 0x00001;
console.log(octalNumber + 10, "..adding 10 to octalNumber");
//note: Conversion of String to Number
var no1 = 5;
var no2 = "10";
var convertedno2 = Number(no2);
console.log(no1 + convertedno2, "...Converting String to Number");
//note: Type Inference (If you have not specified the dataType first and then suddenly changing the dataType , it will give Error )
var data = 12;
data = "Hello Pushan Verma";
console.log(data);
