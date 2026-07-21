
// //topic : Ways of Declaring the Promise ->

// //note:P1- Just Simple Resolve / Reject ------->
// let p1= new Promise((resolve , reject )=>{
//     resolve({message : "success" , name : "Pushan Verma ", major :"Comp Science" })
//     // reject({message :"Failed" });
// });


// //note:P2- Resolving after 4 seconds -------->
// let p2 = new Promise( function(resolve , reject){
//     setTimeout(() => {
//         resolve({message:"Promise p2 resolved after 4 seconds"});
//         console.log("...resolved after 4 seconds");
//     }, 4000);
// });


// //note:P3- Resolving with a button Click -------->

// let resolveButton = document.querySelector('#resolve-btn');
// let rejectButton = document.querySelector('#reject-btn');


// console.log(resolveButton ,"....button");
// console.log(rejectButton, ".....rejectButton");


// let p3 = new Promise ((resolve, reject )=>{
//     // with Resolve Button ->
//     resolveButton.addEventListener("click", function() {
//     resolve({message : "P3 promise resolved after clicking Resolve button "});
//     });

//     //with Reject Button ->
//     rejectButton.addEventListener("click", ()=>{
//         reject({message:"P3 promise rejected after clicking reject Button "})
//     })

// });


// console.log(p1,"....p1");
// console.log(p2,"....p2");
// console.log(p3,"....p3");

// // Applying the methods present inside Promise (then , catch and finally )->

// p3.then((data)=>{
//     console.log(data,"...data inside Resolve");
// }).catch((data)=>{
//     console.log(data,"...data inside Reject ");
// }).finally(()=>{
//     console.log("...This is finally ");
// })


//note: All the Promises are stored in MicroTask Queue and not the Callback Queue.(comment upper code to run the bottom one).



// setTimeout(() => {
//  console.log("....setTimeOut ");
    
// });


// const p = new Promise( function (resolve, reject){
//     console.log("...Promise Resolved");
//     resolve({message : ".....Resolved Promise "})
// });

// p.then((data)=>{
//     console.log(data ,"..data in then ");
// }).catch((error)=>{
//     console.log(error,"...error");
// }).finally(()=>{
//     console.log("..finally");
// })



// note: .then() returns a Promise. 


let p0 = new Promise((resolve , reject)=>{
    console.log("....1_Promise");
    resolve({message : "Hello Promise resolved"})
});

p0.then((data)=>{
    console.log("..2_then");
    return {message :" Hello bhaiyo !!"}
}).then((data)=>{
    console.log(data,"...data in 2nd console");
    return {message : "Purdue University !!"}
}).then ((data)=>{
    console.log(data,"..data in 3rd console");
    return 0;
}).then ((data)=>{
    console.log(data, "...data in 4th console");
    return -1;
}).then ((data)=>{
    console.log(data,"....data in  5th console");
    return true;
}).then((data)=>{
    console.log(data,"...data in 6th console");
    return [1,2,3,4,5];
}).then((data)=>{
     console.log(data,"...data in 7th console");
    return {name :"Pushan Verma" , age:25, employee:["Pantry","AvTech"] }
}).catch((erro)=>{
    console.log("...Error");
}).finally(()=>{
    console.log("...finally");
})









































