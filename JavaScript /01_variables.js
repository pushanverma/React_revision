const accountId = 14453;

let accountEmail = "pushanverma.99@gmail.com";

accountCity = "Delhi";

let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountCity, accountState]);

// let , var and const

// var is used in old js version , where it had a problem of scope , it can be changed anywhere in the code which
// introduced the problem of scoping

// where let came in picture and let is block scoped ,

// we can store any type of value in (let and var ) since javsScript is dynamically typed language

// whereas const is a type of variable which is fixed , its value cannot be changed , it is also blocked scoped variable

// Note : if we dont write any variable before variableName , js automatically initializes memory to it

// undefined , not defined and null,

//1.undefined (when you declare the variable but does not intialise it with any value )
let a;
console.log(a);

//2.null (is a type of value "actual value" intentionally put to tell the space is empty )
let b = null;
console.log(b);

//3.not defined (using a variable which has never been declared , a type of Reference Error )
// console.log(c);

//Note - "Typeof"  , a way to investigate the dataType of variable

console.log(typeof b); // type of null , is an object (it can be said as a bug in js )

console.log(typeof a); // type of undefined , is undefined
