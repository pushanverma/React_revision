//============= Shallow Copy ============

console.log("===============SHALLOW COPY=============");

let a ={
    firstName:"pushan",
    lastName:"verma"
};

// new variable pointing to old variable 
let b =a;   // Reference copy 

console.log(a.firstName);
console.log(a.lastName);
console.log(b.firstName);
console.log(b.lastName);

b.firstName="piyush";
console.log("--------After updating value in b , changes are reflected in a and b both ");


console.log(a.firstName);
console.log(a.lastName);
console.log(b.firstName);
console.log(b.lastName);



//=============Deep Copy=================
console.log("\n===============DEEP COPY=============");


let c={
    firstName:"Sahil",
    lastName:"verma"
}


let d ={
    firstName:"piyush",
    lastName:"verma"
}

console.log(c.firstName);
console.log(c.lastName);
console.log(d.firstName);
console.log(d.lastName);


c.firstName ="saiyam";


console.log("------After updating value in c,changes are only reflected in c and not in d ");

console.log(c.firstName);
console.log(c.lastName);
console.log(d.firstName);
console.log(d.lastName);















