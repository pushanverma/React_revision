//topic:Arrays in js

//arrays in js are re-sizeable , can be mix of different dataTypes

let myArr = [1, 2, 3, 4, "pushan", true, ["a", "b", "c"]];

// console.log(myArr[0], "...integer in myArr");
// console.log(myArr[4], "...string in myArr");
// console.log(myArr[5], "...boolean value in myArr");
// console.log(myArr[6], "....Array inside array of type character");

//note: whenever array is copied , they create shallow copies(address is shared with new array of original array , new space is not given which is called deep copy)



//subtopics: Methods in Arrays (push , pop, unshift,shift,includes,indexof,slice,splice,concat,spread,rest,)
// myArr.push(6);
// console.log(myArr, "...pushing values in array just like stack ");
// myArr.push("verma");
// console.log(myArr, "....myArr");
// myArr.pop();
// console.log(myArr, "....popping values in array just like stack");

//unshift(changes the original array )

// myArr.unshift(78);
// console.log(myArr, "...unshift -adding values at start ");

//shift(changes the original array )
// myArr.shift();
// console.log(myArr, "...shift -removing values from start");

//includes
// console.log(myArr.includes(9), "...includes method finding 9 ");
// console.log(myArr.includes(true), "...includes  method finding true");
// console.log(myArr.includes(2), "...includes method finding 2 ");

//indexof

// console.log(myArr.indexOf("pushan"), ".....indexof method");
// console.log(myArr.indexOf(), ".....indexof method");

//shift

//join(it converts array into string with comma seperated values)

// let newArr = myArr.join();
// console.log(newArr, "...join array ");
// console.log(typeof newArr, "...typeOf newArr");

//slice and splice

// slice - does not mutate original array
// splice - it mutates original array (it can add , remove or replace values )
//splice syntax - arr.splice(start,deleteCount, item1,item2,item3,......itemN)

// let arr1 = [11, 12, 13, 14, 15, 16, 17, 18];

// console.log(arr1, "Original Array");

// console.log(arr1.slice(1, 3), "....sliced array ");
// console.log(arr1, "...orignal array after slice operation ");

// console.log("\n");

// let arr2 = [11, 12, 13, 14, 15, 16, 17, 18];

// //splice() ,remove values
// console.log(arr2.splice(1, 3), "....splice array"); // start from index 1 and delete 3 values
// console.log(arr2, "...orignal array after splice-remove  operation ");

// //splice() , add values

// arr2.splice(2,0,100,99,34);  // start from index 2 , delete 0 and add 100,99 and 34
// console.log(arr2, "...orignal array after splice-add operation ");

// //splice() , replace values
// arr2.splice(1,2,8,88,);   // start from index 1 , delete 2 items and replace it with 8 and 88(* you can add more values if you want , it is not strict that you can only add 2 values you can add as many values as you want )
// console.log(arr2, "...orignal array after splice-replce operation ");



let marvel_heroes = ["ironman ", "thor", "captain"];
let dc_heroes = ["batman", "superman", "flash"];

//Task - to join two arrays

marvel_heroes.push(dc_heroes); // this will push dc heroes as array in marvel heroes, individual values are not stored
// console.log(marvel_heroes, "....marvel heroes");

// concat method (joins the arrays )- returns a new array , does not mutate
let all_heroes_concat = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes_concat, "...all heroes using concat method ");

//topic: Spread operator( take glass and drop , it will shatter into pieces , this is what spread operator is )

//with arrays
let bollywood = ["akshay", "ajaydevgan", "sanjaydutt"];
let hollywood = ["tomcruise", "robertdowneyJr", "chrisHemsworth"];

let all_filmActor_spread = [...bollywood, ...hollywood];
// console.log(all_filmActor_spread, "...all heroes using spread method ");

//topic: Spred Operator with Objects

//Combining objects(using Object.assign(), it provides the flexibility to mutate or not to mutate the array )

console.log("=======Using the empty object=========");

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

let combinedObject = Object.assign({}, obj1, obj2, obj3);
//  empty object is defined because if we combine all the objects, the mutated objects will be store in  the first object, thats why , it is kept empty.
// if you will not give the empty object it will mutate the array present at 1st position.

console.log(combinedObject, "...combinedObject");
console.log(obj1,"...obj1");
console.log(obj2,"...obj2");
console.log(obj3,"...obj3");


console.log("=======Without the empty object=========");
//without empty object , the object1 gets updated and object1 gets mutated .
let combinedObject2=Object.assign(obj1,obj2,obj3);

console.log(combinedObject2, "...combinedObject2");
console.log(obj1,"...obj1");
console.log(obj2,"...obj2");
console.log(obj3,"...obj3");


// console.log("=======Using spread Operator=========");

//spread operator
let combinedObject3 = { ...obj1, ...obj2, ...obj3 };
// console.log(combinedObject3, "...combinedObject3");

//flat method (used to reduce the complexity of array - basically array inside array

let arr = [1, 2, 3, 4, [12, 13, [15, 16, 17], 19, 20, ["a", "b"]]];
// console.log(arr.flat(Infinity), "...flat array ");

// Array class methods

//isArray method(returns true / false)
// console.log(Array.isArray("pushan"));
// console.log(Array.isArray(["pushan", "verma"]));

//Array.from() - makes array out of string (only string values accepted) and returns array with index

// console.log(Array.from("pushan"));

//Array.of()- takes variables and returns array
let score1 = 100;
let score2 = 100;
let score3 = 300;
let grade1 = "A";

// console.log(
//   Array.of(score1, score2, score3, grade1),
//   "...combining diffrent values to make array "
// );


