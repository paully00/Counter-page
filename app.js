const counterValue = document.getElementById("counter");
const btnlower = document.getElementById("lower");
const btnadd = document.getElementById("add");

let counter = 0;

btnlower.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterValue.innerHTML = counter;
  }
});

btnadd.addEventListener("click", () => {
  if (counter < 50) {
    counter++;
    counterValue.innerHTML = counter;
  }
});