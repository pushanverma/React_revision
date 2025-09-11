//topic: 1(Converting to number )

let a = 23;
// console.log(typeof a);
//number

//topic: 2

let b = "23";
// console.log(typeof b);
//string

//topic: 3
let c = Number(b);
// console.log(typeof c);
//number

//topic: 4
// number ,only string, numbers with string characters, null , undefined , boolean
//123-  converted value is 123
//pushan- converted value is NAN
//25pushan-converted value is NAN
//null-converted value is 0
//undefined-converted value is NAN
//true-converted value is 1

// let d = "123";
// // let d ="pushan";
// // let d="25pushan";
// // let d=null;
// // let d=undefined;
// // let d = true;
// console.log(typeof d);
// //always string
// let e = Number(d);
// console.log(typeof e);
// //trying to convert it to number
// console.log(e);
// //converted value

//-----------------------------------------------------------------------------------
//topic: 5 (Converting to Boolean )
// number-true , empty string -false , only string - true
let x = 23;
// let x="";
// let x="pushan";
let y = Boolean(x);
// console.log(y);

//------------------------------------------------------------------------------

let g = 45;
let h = String(g);
console.log(h);
console.log(typeof h);

//------------Operations------------

//addition , subtraction , multiply , division , modulo , prefix , postfix (you know)
console.log(2 ** 3); //power operator
