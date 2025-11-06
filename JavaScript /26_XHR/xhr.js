const button = document.querySelector("button");

console.log(button, "...button");

button.addEventListener("click", (e) => {
  console.log("...button clicked");

  const xhr = new XMLHttpRequest(); //1 initialization of XMLHttpRequest
  console.log(xhr, "...xhr");

  xhr.responseType = "json"; // we can either set responseType explicitly or we can do JSON.parse() when data is fetched.

  xhr.responseType=""
  //note: When the api is called and the data is loaded , then there are two methods 
  //1. Classis event listener method - this event listener is fired and consoles data
  //   xhr.addEventListener("load", () => {
  //     console.log(xhr.response, "...data loaded");
  //   });

  //2. Using inbuilt method in XMLHttpRequest object called onload()
  xhr.onload = () => {
    console.log(xhr.response, "...data");
  };

  // xhr.open('GET','https://procodrr.vercel.app/?sleep=5000');
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // open method just set everything in the packet ()
  xhr.send(); // send message sends the packet (or you can say request)
});
