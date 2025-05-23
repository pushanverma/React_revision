let a = 10;
const b = 20;
var c = 30;

// console.log(a, "...let value");
// console.log(b, "....const value");
// console.log(c, "....var value");

if (true) {
  c = 300;
  a = 1000;
  // b=12;
  let d = 5;
}

d = 500;

//after updating
// console.log("-----------------------");

// console.log(a, "...let value");
// console.log(b, "....const value");
// console.log(c, "....var value");
// console.log(d, "....d value");

// Nested functions support in js , which is not there in Java
// child function can access parent elements(i.e two can access one ) but one cannot access two function variables(i.e website)

function one() {
  let username = "pushan";
  function two() {
    let website = "www.google.com";
    console.log(username, "...username ");
  }
  //   console.log(website, "...website");

  two();
}

one();

// Note : In js , variables are very powerful they can hold functions also .

// Function declaration in two ways
// 1. Declaring normally

// Little bit of hoisting

console.log(addOne(5), "...addOne call placed before function ");

function addOne(num) {
  return num + 1;
}

console.log(addOne(5), "...addOne call placed after function ");

//2.Storing in variable(because variables can hold functions)

// console.log(addTwo(2), "....addTwo call placed before function ");
// the above statement cannot take place because we cannot use a variable before it is initialized, it is like using something which has not produced uptill now, this concept is called hoisting when you cannot access variable before declaring that

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(2), "....addTwo call placed after function ");
