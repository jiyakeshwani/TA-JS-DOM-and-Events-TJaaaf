let box = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let smallBox = document.createElement("div");
  smallBox.className = "small-box";
  smallBox.textContent = `${Math.round(Math.random() * 500)}`;
  box.append(smallBox);
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)})`;
}

function handler() {
  let smallBox = document.querySelectorAll(".small-box");
  smallBox.forEach((element) => {
    element.textContent = `${Math.round(Math.random() * 500)}`;
    element.style.backgroundColor = getRandomColor();
  });
}

box.addEventListener("mousemove", handler);
