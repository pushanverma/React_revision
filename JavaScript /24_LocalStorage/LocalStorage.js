let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");

//initially setting the Name and Age , which is present inside localStorage , if it is nothing then simply empty string , if it is present then it will show the details
document.getElementById("typed_name").innerText =
  localStorage.name === undefined ? " " : localStorage.name;
document.getElementById("typed_age").innerText =
  localStorage.age === undefined ? " " : localStorage.age;

//After refreshing , if there is some email id or phone data available , it will be filled
let localData = localStorage.myData ? JSON.parse(localStorage.myData) : {}; // since the data is stored in strings in LocalStorage , we have to convert it into object inorder to use it further .
console.log(localData.email_id, "...localData");

document.getElementById("typed_email").innerHTML =
  localData.email_id === undefined ? " " : localData.email_id;
document.getElementById("typed_phoneNumber").innerHTML =
  localData.phoneNumber === undefined ? " " : localData.phoneNumber;

//----------------------1. Setting localStorage in browser--------------------
//note: (there are two methods to get and set LocalStorage- i. getting and setting name by "directly optional chaining" ii. "getItem and setItem inbuilt methods"- more optimized )

nameInput.addEventListener("input", (e) => {
  //   localStorage.name = e.target.value;
  localStorage.setItem("name", e.target.value);

  document.getElementById("typed_name").innerText =
    localStorage.getItem("name");
});

ageInput.addEventListener("input", (e) => {
  //   localStorage.age = e.target.value;
  localStorage.setItem("age", e.target.value);

  document.getElementById("typed_age").innerText = localStorage.getItem("age");
});

//---------------------2. Storing object inside LocalStorage--------------------

let data = {};

let emailInput = document.getElementById("emailId");
let phoneNumberInput = document.getElementById("phoneNumber");

//before refreshing,

emailInput.addEventListener("input", (e) => {
  data.email_id = e.target.value;
  // console.log(data,"...data");
  // console.log(JSON.stringify(data),"...data");

  document.getElementById("typed_email").innerHTML =data.email_id;
  localStorage.setItem("myData", JSON.stringify(data));

});

phoneNumberInput.addEventListener("input", (e) => {
  data.phoneNumber = e.target.value;
   document.getElementById("typed_phoneNumber").innerHTML =data.phoneNumber;
  localStorage.setItem("myData", JSON.stringify(data));
});
