//Arrays in js

//arrays in js are re-sizeable , can be mix of different dataTypes

let myArr = [1, 2, 3, 4, "pushan", true, ["a", "b", "c"]];

// console.log(myArr[0], "...integer in myArr");
// console.log(myArr[4], "...string in myArr");
// console.log(myArr[5], "...boolean value in myArr");
// console.log(myArr[6], "....Array inside array of type character");

//note: whenever array is copied , they create shallow copies(address is shared with new array of original array , new space is not given which is called deep copy)

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
// splice - it mutates original array

let arr1 = [11, 12, 13, 14, 15, 16, 17, 18];

console.log(arr1, "Original Array");

console.log(arr1.slice(1, 3), "....sliced array ");
console.log(arr1, "...orignal array after slice operation ");

console.log("\n");

console.log(arr1.splice(1, 3), "....splice array");
console.log(arr1, "...orignal array after splice operation ");
