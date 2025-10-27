//--------------------------------setTimeOut() , clearTimeOut() ---------------------------

// After 4 seconds , change the text and color of the heading and if the stop is clicked the process will stop

function changeHeading() {
  const heading = document.querySelector(".topic_1");
  console.log(heading.innerHTML, "...heading");
  heading.innerHTML = "Now Learning ClearTimeOut";
  heading.style.color = "red";
}

const timeOutstopButton = document.querySelector("#stop_timeOut");
console.log(timeOutstopButton, "...stopButton");

timeOutstopButton.addEventListener("click", () => {
  clearTimeout(timeOut);
});

const timeOut = setTimeout(() => changeHeading(), 2000);

//--------------------------------setInterval() , clearInterval() ---------------------------

//after every 1 second the heading shows random number and it stops when button is clicked.

function generateRandomNumber() {
  let randomNumber = Math.round(Math.random() * 10 + 1);
  //   console.log(a, "...random Number");
  document.querySelector(".topic_2").innerHTML = randomNumber;
}

const interval = setInterval(generateRandomNumber, 1000);

let intervalStopButton = document.querySelector("#stop_interval");

intervalStopButton.addEventListener("click", () => {
  clearInterval(interval);
});

//topic:Project -1
// When clicked on start button , random colors gets update on dom and on stop button it stops

function generateRandomColor() {
  // hexadecimal number(16)
  let hex = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.round(Math.random() * 16); // random number between 0 and 15
    color += hex[randomNumber];
  }
  console.log(color, "....color");
  return color;
}

//-----------------Project_1----------------------------
// Change background color of div on interval of 1 second and stop when stop button is clicked.

const startButton = document.querySelector("#project_1_start");
const stopButton = document.querySelector("#project_1_stop");

let bgInterval;
let changeBgColor = () => {
  console.log("...change bg fun called");
  let generatedColor = generateRandomColor();
  console.log(generatedColor, "...generatedColor");

  bgInterval = setInterval(() => {
    let generatedColor = generateRandomColor();
    // console.log(generatedColor, "...generatedColor");
    let project_1_container = document.querySelector(".project_1_container");
    // console.log(project_1_container, "....project_1_container");
    project_1_container.style.backgroundColor = generatedColor;
  }, 1000);
  let project_1_container = document.querySelector(".project_1_container");
  // console.log(project_1_container, "....project_1_container");
  project_1_container.style.backgroundColor = generatedColor;
};

startButton.addEventListener("click", () => {
  // console.log("....start of Project_1 clicked");
  changeBgColor();
});

stopButton.addEventListener("click", () => {
  console.log("....stop button clicked");

  clearInterval(bgInterval);
});

//----------------------Project_2----------------------------------
//If any key is pressed , it will print on screen .

let project_2_container = document.querySelector(".project_2_container");

console.log(project_2_container, "...project_2_container");

window.addEventListener("keydown", (e) => {
  project_2_container.innerHTML = `
<table>
  <tr>
    <th>Key </th>
    <th>KeyCode </th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
`;
});



