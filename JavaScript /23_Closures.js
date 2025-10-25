//------------------------PARENT-CHILD---------------------------------

//Program 1 : Simple example to understand Closures

// function Parent() {
//   debugger;
//   let a = 10;
//   const b = 5;

//   console.log(b, "...b outside Child function");

//   function Child() {
//     console.log(a);
//   }

//   Child();
// }

// Parent();

//Program 2 : Returning function and understanding Closures

// function Parent(num) {
//   debugger;
//   let a = num;
//   const b = 5;
//   function Child() {
//     console.log(a, "....a inside child function");
//   }
//   return Child;
// }
// const y1 = Parent(1);
// const y2 = Parent(2);
// console.dir(y1, "....y1");
// console.log(y2, "....y2");
// //note: Remember the y1 and y2 are two different scopes , both has different closures even though they are calling the same function .

// y1();
// y2();

//------------------------GRANDPARENT-PARENT-CHILD---------------------------------
//Program 3 :

// function grandParent() {
//   console.log("....grandParent function  called");

//   let a = 10;

//   function Parent(num) {
//     console.log("....Parent function called");
//     const b = num;

//     function Child() {
//       console.log("....Child  function called");
//       console.log(a + " , " + b + "-- value of a and b in child function");
//     }

//     Child();
//   }

//   const y1 = Parent(1);
//   const y2 = Parent(2);

//   y1();
//   y2();
// }

// grandParent();

//-----------------Changing Variable inside Closure---------------------

//Program 4 :
// function Parent(num) {
//   let a = num;

//   function Child() {
//     a++; // updating value of closure variable
//   }

//   return Child;
// }

// let y1 = Parent(0); // will get Child function
// let y2 = Parent(2);

// y1(); // calling y1 function, 1st time
// y1(); //calling y1 function , 2nd time
// y1(); //calling y1 function , 3rd time

// // value must become -(0+1+1+1) 3 inside the closure )

// y2();
// y2();
// //value must become -(2+1+1) 4 inside the closure)
// console.dir(y1, "....y1");
// // console.dir(y2,"....y2");

//-----------------Created Once function ------------------

//Program 5: Real life example

function createdOnceFunction() {
  let execute = false;

  return function () {
    if (!execute) {
      execute = true;
      console.log("Congratulations your function is running once !!");
    }
  };
}

const y =createdOnceFunction();
y();

