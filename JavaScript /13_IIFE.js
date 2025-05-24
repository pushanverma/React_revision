// Since they are immediately inviked function , they are not needed to call , they will execute themseleves ,
// if they have parameters , then we need to pass them values otherwise they will give "undefined"

//named IIFE
(function chai(name) {
  console.log(`DB connected  ${name}!!`);
})("verma");

// semicolon is very necessary to seperated two IIFE's , otherwise the program wont run
((name) => {
  console.log(`STAGING DB connected ${name}!!`);
})("pushan");
