const btns = document.querySelectorAll(".button");
const main = document.querySelector(".main-content");
// nav button click handel
let prevButton = null;

const btnClickHandle = (event) => {
  const button = event.target;
  const id = button.id;

  if (prevButton && prevButton !== button) {
    prevButton.style.backgroundColor = "";
    prevButton.style.color = "";
  }

  button.style.backgroundColor = "white";
  button.style.color = "black";
  button.style.marginLeft = "6px";

  if (id === "b1") {
    main.innerHTML = "";
  } else if (id === "b5") {
  } else {
    main.innerHTML = "";
  }

  prevButton = button;
};

btns.forEach((button) => {
  button.addEventListener("click", btnClickHandle);
});
