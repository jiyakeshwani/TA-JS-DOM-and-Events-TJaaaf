let input = document.querySelectorAll("button");
let outcome = document.querySelector(".output");

let exp = "";
let output;
function calculate(event) {
  let value = event.target.dataset.text;
  if (value == "=") {
    output = eval(exp);
    outcome.innerText = output;
  } else if (value == "C") {
    output = exp = "";
    outcome.innerText = output;
  } else {
    exp += value;
    outcome.innerText = exp;
  }
}
input.forEach((input) => {
  input.addEventListener("click", calculate);
});
