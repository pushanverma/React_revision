//Rest operator

function printNumber(...num) {
  console.log(num);
}
//if you want to print only one value, this syntax is ok
printNumber(200);

// if you have to pass multiple values to a function use REST operator(...)
printNumber(100, 200, 300, 400);

//what is there are already some values and then  using rest operator

function printNumber1(val1, val2, ...num) {
  console.log(num);
}
printNumber1(1, 2, 3, 4, 5, 6);
// here 1 goes in val1 , 2 goes in val2 and rest of the values in num

//Passing objects in function

let obj = {
  name: "Pushan Verma",
  college: "BPIT",
};

function getDetails(myObj) {
  return `Student name is ${myObj.name} and studying in ${myObj.college} college`;
}

console.log(getDetails(obj));
console.log(
  getDetails({
    name: "Chandresh Verma",
    college: "ADJITM",
  })
);

// Passing arrays in function

let arr = [10, 98, 30, 67, 50];

function maxValue(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxValue(arr));
console.log(maxValue([10, 98, 30, 67, 50]));
