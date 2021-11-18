function withoutEventDeligation() {
  let box = document.querySelectorAll(".without-deligation .box");
  let count = 0;

  function handler(elm, i) {
    elm.innerText = i;
  }
  function clearbox(elm, i) {
    elm.innerText = "";
  }

  box.forEach((elm, i) => {
    elm.addEventListener("click", function () {
      handler(elm, i + 1);
      setTimeout(function () {
        clearbox(elm, i);
      }, 5000);
    });
  });
}
withoutEventDeligation();

function withEventDeligation() {
  let box = document.querySelector(".wrapper .with-deligation ");

  box.addEventListener("click", (event) => {
    let text = event.target.dataset.text;

    event.target.innerText = text;
    setTimeout(function () {
      event.target.innerText = "";
    }, 5000);
  });
}
withEventDeligation();
