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




//================= Functions and Methods  ==========================
console.log("================= Functions and Methods  ==========================");


//Normal function 
function add(a,b){
    return a+b;
}

let result =add(3,4);
console.log(result);



// Methods 
//myMath is a object , pi and all the variables declared inside object are called "properties" and functions inside object are called as "methods"

let myMath ={};
myMath.pi=3.14;
myMath.add =function(a,b){
    return a+b;
}
myMath.subtract=(a,b)=>{
    if(a>b){
        return a-b;
    }else {
        return b-a;
    }
}
myMath.square=(value)=>{
    return value*value;
}

console.log(myMath,"....custom made Math function  ");
console.log(myMath.add(10,11),"...custom addFunction in myMath Object ");

//add two methods subtract and square 
  










