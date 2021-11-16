let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  boxOne.style.backgroundColor = bgColor;
}
function randomColorTwo() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  boxTwo.style.backgroundColor = bgColor;
}

boxOne.addEventListener("click", randomColor);
boxTwo.addEventListener("mousemove", randomColorTwo);
