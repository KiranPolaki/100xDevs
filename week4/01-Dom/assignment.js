const btn = document.querySelector(".btn");
const rateVal = document.querySelector("#rate");
const principleVal = document.querySelector("#principle");
const timeVal = document.querySelector("#time");

const resTotal = document.querySelector(".resTotal");
const resInterest = document.querySelector(".resInterest");

//To minimize the number of requests(while typing give the user to breath and save your req per sec) we use the debouncing
let id;
function deBounce() {
  clearTimeout(id);
  id = setTimeout(() => {
    calculate();
  }, 1000);
}

async function calculate() {
  const principal = rateVal.value;
  const rate = principleVal.value;
  const time = timeVal.value;
  const response = await fetch(
    `http://localhost:3000/interest?principal=${principal}&rate=${rate}&time=${time}`
  );
  const data = await response.json();
  resTotal.innerHTML = data.interest;
  resInterest.innerHTML = data.total;
}

// btn.addEventListener("click", calculate);
