//---------------------------------Numbers----------------------------------------

let score = 400;

console.log(score);

//declaring variable as Number from Class Number
let a = new Number(500);
console.log(a);

//converting a number to string and finding its length
console.log(a.toString().length, "....tostring");

//toFixed method
let b = 123.456789;
console.log(b.toFixed(2), "...b");

//LocaleString(converts many zeroes into understable formats , used in Bug figures mainly puts commas for readibility)
let hundreds = 10000000;
console.log(hundreds.toLocaleString()); // for us
console.log(hundreds.toLocaleString("en-IN")); // for India

//Min and Max value in js

console.log(Number.MIN_VALUE, "....min value");
console.log(Number.MAX_VALUE, "....min value");

//-------------------------------Maths objects in Js---------------------------------

//Absolute values (converting -ve values to +ve values)
let value1 = -4;
console.log(Math.abs(value1), "....Absolute value ");

//round (roundoff the values that are passed , if point value is less than 5  then lower otherwise bigger)
// let value2=4.3;
let value2 = 4.8;
console.log(Math.round(value2), "...round off");

//If you want to control the values that you are passing , you can use ceil and floor
//Ceil(touches to ceiling , that means always take the higher value )

let value3 = 4.3;
console.log(Math.ceil(4.3), "...ceil value");

//Floor(touches the floor , that means always take the lower value)
let value4 = 4.9;
console.log(Math.floor(value4), "...floor value");

//Max and Min values
let value5 = [2, 34, 0.5, 6, 78];
console.log(Math.min(...value5), "....min value");
console.log(Math.max(...value5), "....max value");

//Random value(value always remains b/w 0 and 1 )
console.log(Math.random(), "...random value");

//step 1
let value6 = Math.random() * 10;
console.log(value6, "....random 1 "); //for ones values to include before dot , but the catch here is the value can still have 0-1 , to avoid that we can add 1 to it , so that minimum value becomes 1

let value7 = Math.random() * 10 + 1;
console.log(value7, "...random 2"); // now since the minimim value problem is solved, we have to decrease the numnber of digits appearing after dot , for that using Math.floor

let value8 = Math.floor(value7);
console.log(value8, "...random 3");

//what if you want a random number within a specific range , here is the special formula

let min = 10;
let max = 20;

let value9 = Math.random() * (max - min + 1) + min;
console.log(Math.floor(value9), "...random 4");
