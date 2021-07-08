const resultDiv = document.querySelector("#count-result");
const addBtn = document.querySelector("#add");
const lowerBtn = document.querySelector("#lower");

let minValue = 0;
const maxValue = 50;
let h1 = document.createElement("h1");
h1.innerText = minValue;
resultDiv.append(h1);

addBtn.addEventListener("click", increaseCount);
lowerBtn.addEventListener("click", decreaseCounter);

function increaseCount() {
  let nextCount = minValue;
  if (nextCount < maxValue) {
    let count = parseInt(++minValue);
    h1.innerText = count;
    if (count > 0) h1.classList.add("green");
  }
}

function decreaseCounter() {
  let prevCount = parseInt(minValue);
  if (prevCount > 0) {
    let count = parseInt(--minValue);
    h1.innerText = count;
    if (count < 1) h1.classList.remove("green");
  }
}
