let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");

//initially setting the Name and Age , which is present inside localStorage , if it is nothing then simply empty string , if it is present then it will show the details
document.getElementById("typed_name").innerText =
  localStorage.name === undefined ? " " : localStorage.name;
document.getElementById("typed_age").innerText =
  localStorage.age === undefined ? " " : localStorage.age;

//1. Setting localStorage in browser
//note: (there are two methods to get and set LocalStorage- i. getting and setting name by "directly optional chaining" ii. "getItem and setItem inbuilt methods"- more optimized )

nameInput.addEventListener("input", (e) => {
  //   localStorage.name = e.target.value;
  localStorage.setItem("name", e.target.value);

  document.getElementById("typed_name").innerText = localStorage.getItem('name');
});

ageInput.addEventListener("input", (e) => {
  //   localStorage.age = e.target.value;
  localStorage.setItem('age',e.target.value);

  document.getElementById("typed_age").innerText = localStorage.getItem('age');
});


