//Assignment
//1) create a counter in Js to count down from 30-0

let number = document.querySelector("h3").textContent;
const btn = document.querySelector(".start");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
  const id = setInterval(() => {
    if (number > 0) {
      number = number - 1;
      document.querySelector("h3").textContent = number;
    } else {
      btn.textContent = "ended";
      document.querySelector("h3").textContent = 0;
      clearInterval(id);
      console.log("Interval cleared");
    }
  }, 1000);
});
reset.addEventListener("click", () => {
  location.reload();
});

//2) Actuall time between setTime out and inner call back fnc

function doSmthng() {
  let middle = performance.now();
  console.log(middle, "middle");
}
let start = performance.now();
console.log(start, "start");
setTimeout(() => doSmthng(), 0);
// let end = performance.now();
// console.log(end, "end");

//3) create a clock HH:MM:SS

const clock = document.querySelector(".clock-ipt");
const clkBtn = document.querySelector(".clock-button");
let hour = 0;
let min = 0;
let sec = 999;

// clkBtn.addEventListener("click", () => {
//   setInterval(() => {
//     setInterval(() => {
//       hour += 1;
//       console.log(hour);
//     }, 3600000);
//     setInterval(() => {
//       min += 1;
//     }, 60000);
//     sec++;
//     clock.innerHTML = `${hour}:${min}:${sec}`;
//   }, 1000);
// });

//This i will be doing in the CodePen
