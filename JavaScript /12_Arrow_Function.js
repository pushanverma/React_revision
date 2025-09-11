//topic : this keyword

const user = {
  username: "pushanverma",
  welcomeMessage: function () {
    console.log(this, "...1 this inside object");
    console.log(this.username, "....accessing values inside object ");
    console.log(`Hi user -${this.username} !! welcome to invest-o-wise`);
  },
};

// console.log(user.username, "...username");
//changing username outside object body 
user.username = "pushan2599";
// console.log(user.username, "....user ");

//calling function inside object body
// user.welcomeMessage();




// Logging "this" inside node environment will give you empty object , whereas in Browser environment it will give you window object

// console.log(this, "...2 this inside node environment outside !!");

//this inside function(this wil fetch you a global object unlike printing outside )



function chai1() {
  let username = "verma2599";
  console.log(this, ".... this inside chai1 ");
  console.log(username,"...username in chai1");
  
  console.log(this.username, "...this.username inside chai ");
}

// chai1();
//both variables and this shares diffrent memory spaces

const chai2 = function () {
  let username = "verma2599";
  console.log(this, "....this inside chai2");
  console.log(this.username, "...username in chai2");
};

chai2();

const chai3 = () => {
  let username = "verma2599pushan";
  console.log(this, "....this inside chai3");
  console.log(this.username, "...username in chai 3");
};

// chai3();

//topic: Arrow functions
// Note : we dont have this inside arrow function

//Explicit Arrow function call(writing return statement explicitly )
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

// console.log(addNumbers(2, 4), "......1");

// Implicit Arrow function call(no need to write return statement , helpful in only one line)
const addNumbers2 = (num1, num2) => num1 + num2;

// console.log(addNumbers2(3, 5), ".....2");

// how to return objects inside arrow functions

// const addNumbers3=()=>{ username:"pushanverma"}; // wrong way
const addNumbers3 = () => ({ username: "pushanverma" }); // Correct way

// console.log(addNumbers3(), ".....3");
