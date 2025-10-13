//Higher order Functions - HOF are those functions which receives some function in the parameter or return some function

//1.--------------- Taking function as parameter-------------
function sayHello() {
  console.log("Hello!");
}

function greetUser(callback) {
  console.log("Welcome User!");
  callback(); // calling the function passed as argument
}

// passing function as argument
greetUser(sayHello);


//note: here sayhello is a "callback function".

//2.------------Returns another function as result----------

function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}!`);
  };
}

// calling the outer function
const greetPushan = greet("Pushan");

// now calling the returned function
greetPushan("Good morning");

//----------------------------------------------------------------------------------------------------

//forEach Loop
let languages = ["java", "js", "python", "rust"];

let printLanguages = languages.forEach((item) => {
  //   console.log(item);
  return item;
});

// console.log(printLanguages, "....printLanguages");

//note: forEach loop can only print values it cannot return the values.for this Higher order functions are used

//topic : filter method (filters the information based on user needs)

let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ans = myNumber.filter((num) => {
  return num > 4;
});

// console.log(ans);

//note: Another method to perform filter operation using forEach loop
let newNums = [];

myNumber.forEach((item) => {
  if (item > 4) {
    newNums.push(item);
  }
});
// console.log(newNums, "..newNums");

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//1.return books which has genre = History

let historyBooks = books.filter((book) => {
  return book.genre === "History";
});
// console.log(historyBooks, "...history Books");

//2.books that are published after 2000

let publishedAfter2000 = books.filter((book) => {
  return book.publish > 2000;
});

// console.log(publishedAfter2000, "...publishedAfter2000");

//3.History book published after 1995

let historyBookAfter1995 = books.filter((book) => {
  return book.genre === "History" && book.publish > 1995;
});

// console.log(historyBookAfter1995, "...historyBookAfter1995");

//topic : Maps(iterates on the whole array and useful when every element is affected )

let myAns = myNumber.map((item) => {
  return item + 10;
});

// console.log(myAns, "...myAns");

//topic: Chaining(Map and filter chaining- map.map / map.filter / filter.filter / filter.map )

//Multipying each value by 10 and then adding 1 to each updated value

let ans2 = myNumber
  .map((item) => {
    return item * 10;
  })
  .map((item) => {
    return item + 1;
  });

console.log(ans2, "...ans2");

//In the above question Filter out those values which are greater than 40

let ans3 = myNumber
  .map((item) => {
    return item * 10;
  })
  .map((item) => {
    return item + 1;
  })
  .filter((item) => {
    return item > 40;
  });

console.log(ans3, "...ans3");

//topic:  Reduce(reduce also expects a callback function , where we have to give intialvalue after braces and accumulator and currentvalue are changed on the basis of logic provided)

// let arr = [1, 2, 3];

// let intialValue = 0;

// //note: using normal function

// let answer1 = arr.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator:${accumulator} and currentValue:${currentValue}`);
//   return accumulator + currentValue;
// }, intialValue);

// console.log(answer1, "...answer1");

// //note: using arrow function

// let answer2 = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, intialValue);

// console.log(answer2, "...answer2");

// topic: SHOPPING_CART LOGIC

// // all the items are mentioned here

// let shopping_mall = [
//   {
//     id: 1,
//     item_name: "Shirt",
//     item_price: 600,
//   },
//   {
//     id: 2,
//     item_name: "Jeans",
//     item_price: 800,
//   },
//   {
//     id: 3,
//     item_name: "Shoes",
//     item_price: 1000,
//   },
// ];

// console.log("Choose out of these :-");

// let user_choice = [];

// // Load the readline module(module required to read inputs inside terminal in javascript)
// const readline = require("readline");

// // Create an interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// //if user is "pushan" he will pay 100 more than any other user.
// let user = "pushan";

// let billInitialValue = 0;

// if (user === "pushan") {
//   billInitialValue = 100;
// }

// //displaying the items present on shop

// shopping_mall.map((article, index) => {
//   console.log(`${article.id} ${article.item_name} , Rs.${article.item_price}`);
// });
// console.log("-------------------------------");

// //asking questions

// rl.question("Do you want shirt ?(y/n)", (shirt) => {
//   if (shirt == "y") {
//     let addShirt = shopping_mall.find((item) => item.item_name === "Shirt");
//     console.log(addShirt, "...addShirt");
//     user_choice.push(addShirt.item_price);
//   }

//   rl.question("Do you want jeans?(y/n)", (jeans) => {
//     if (jeans == "y") {
//       let addJeans = shopping_mall.find((item) => item.item_name === "Jeans");
//       console.log(addJeans, "...addJeans");
//       user_choice.push(addJeans.item_price);
//     }

//     rl.question("Do you want shoes?(y/n)", (shoes) => {
//       if (shoes == "y") {
//         let addShoes = shopping_mall.find((item) => item.item_name === "Shoes");
//         console.log(addShoes, "...addShoes");
//         user_choice.push(addShoes.item_price);
//       }

//       let totalBillAmount = user_choice.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//       }, billInitialValue);

//       console.log(totalBillAmount, "....totalBillAmount");

//       rl.close();
//     });
//   });
// });
