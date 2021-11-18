let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userData = {};

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  let elements = event.target.elements;

  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.gender = elements.gender.value;
  userData.color = elements.color.value;
  userData.range = elements.range.value;
  userData.drone = elements.drone.value;
  userData.terms = elements.terms.checked;

  modal.classList.add("open");

  let close = document.querySelector(".modal_close");
  close.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  displayInfo(userData);
});

function displayInfo(data = {}) {
  modalInfo.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let gender = document.createElement("p");
  gender.innerText = `Watching Choice: ${data.gender}`;
  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;
  let range = document.createElement("p");
  range.innerText = `Rating for movie: ${data.range}`;
  let drone = document.createElement("p");
  drone.innerText = `Hello ${data.drone}`;
  let terms = document.createElement("p");
  terms.innerText = `👉: ${
    data.terms
      ? "You have accepted the terms and condition"
      : "You have not accepted the terms and condition"
  }`;

  modalInfo.append(h1, email, gender, color, range, drone, terms);
}
