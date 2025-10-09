"use strict"

let name ="pushan";
let roll_number =25;
let hasKnowledge= true;


console.log(typeof name);
console.log(typeof roll_number);
console.log(hasKnowledge);
console.log(typeof null);
console.log(typeof undefined);


//Truthy and Falsy Values (can be checked by Boolean method )


//Numbers 
console.log(Boolean(1),"....+ve value");
console.log(Boolean(-1),"...-ve value");
console.log(Boolean(0),"....0 value");   //false
console.log(Boolean(0.000001),".....+ve decimal number value");
console.log(Boolean(-0.000001),".....+ve decimal number value");
console.log(Boolean(Infinity),"....+ve infinity Value");
console.log(Boolean(-Infinity),"...-ve infinity value");
console.log(Boolean(NaN),"....not a Number(NaN)");   //false

console.log("----------------------------------------------");


//String 
console.log(Boolean(''),"...empty String");// false
console.log(Boolean(" "),"....space(looking like empty string)");

console.log("------------------------------------------------");

//undefined
console.log(Boolean(undefined),"....undefined"); //false
console.log(Boolean(null),"....null");  //false









