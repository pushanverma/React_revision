//---------Global Scope ,(Block scope) Local Scope , Lexical Scope, Module Scope

//----------------Global and Local Scope --------------------

// var a = "pushanVerma";
// let userAge = 25;
// const userId = 2599;

// //normal function
// function add(a, b) {
//   console.log(this.a, "...this.a");
//   console.log(a, "....value of a");
//   return a + b;
// }

// //Arrow function
// let subtract = (a, b) => {
//   if (a > b) {
//     return a - b;
//   } else {
//     return b - a;
//   }
// };

// console.log(add(3, 4), "...add");

// console.log(subtract(4, 14), "....subtract");

//-------------------------Lexical Scope-------------------------

// GrandParent ,Parent ,Child

function GrandParent_fn() {
  debugger;

  var grandParentCount = 2;
  let grandFather = "MohanLalVerma";
  const grandMother = "KrishnaVerma";

  function Parent_fn() {
    var parentCount = 2;
    let father = "RameshChander";
    let mother = "DakshaVerma";

    console.log(grandFather,"...grandFather name in Parent_fn");
    console.log(grandMother,".....grandMother name in Parent_fn");
    
    

    function Child_fn() {
      var childCount = 2;
      let son = "PushanVerma";
      const daughter = "AditiVerma";

      console.log(parentCount, "....child accessing Parent");
      console.log(grandParentCount, "...child accessing GrandParent");
    }

    Child_fn(); // calling Child_fn inside Parent Function
  }

  Parent_fn(); // calling Parent_fn inside GrandParent Function
}

GrandParent_fn();

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

// function one() {
//   let username = "pushan";
//   function two() {
//     let website = "www.google.com";
//     console.log(username, "...username ");
//   }
//   //   console.log(website, "...website");

//   two();
// }

// one();

// Note : In js , variables are very powerful they can hold functions also .

// Function declaration in two ways
// 1. Declaring normally

// Little bit of hoisting

// console.log(addOne(5), "...addOne call placed before function ");

// function addOne(num) {
//   return num + 1;
// }

// console.log(addOne(5), "...addOne call placed after function ");

//2.Storing in variable(because variables can hold functions)

// console.log(addTwo(2), "....addTwo call placed before function ");
// the above statement cannot take place because we cannot use a variable before it is initialized(since it is const , if it was var its value would be undefined), it is like using something which has not produced uptill now, this concept is called hoisting when you cannot access variable before declaring that

// const addTwo = function (num) {
//   return num + 2;
// };

// console.log(addTwo(2), "....addTwo call placed after function ");
