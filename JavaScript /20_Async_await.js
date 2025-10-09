// understanding setTimeOut and clearTimeout


//understanding setTimeInterval and clearTimeInterval


//Project_1 - Start should change the background color evry second and stop will end it .

//Project_2- See the key you are pressing 


console.log("A");
debugger

setTimeout(() => console.log("B"), 0); // goes to Task Queue

Promise.resolve().then(() => console.log("C")); // goes to Microtask Queue

console.log("D");