let image = document.querySelector("img");
let button = document.querySelector("button");
let blockingButton = document.querySelector(".blocking-button");

console.log(blockingButton, "....blockingButton");

//note: Synchronous Code
// Synchronous Way of Calling API's is by using XmlHTTpRequest
button.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://random.dog/woof.json?ref=apilist.fun");
  xhr.onload = () => {
    console.log(xhr.response.url, "...data");
    image.src = xhr.response.url;
  };
  xhr.responseType = "json";
  xhr.send();
});

//note: Asynchronous Code
// setTimeOut executes in BrowserApi i.e not in the Js main thread , it is passed to WebApi's to perform execution
// setTimeout(() => {
//   console.log("...Hello my friends");
// }, 4000);

// note: Blocking the Main Thread

// xhr.open(method, url, async);

blockingButton.addEventListener("click", () => {
  console.log("...blocking main thread");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://procodrr.vercel.app/?sleep=5000", false); // this means that async is false , that means this is a synchronous call and only then if it is Synchronous it will block the thread .
  xhr.onload = () => {
    let currentTime = Date.now();
    let timeNow = currentTime;

    while (currentTime + 2000 > timeNow) {
      console.log("Time up");
    }
  };
  xhr.responseType = "json";
  xhr.send();
});
