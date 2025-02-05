const btns = document.querySelectorAll(".button");
const main = document.querySelector(".main-content");

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
    button.style.marginLeft="6px";

    if (id === "b1") {
        main.innerHTML = "hello";
    } else if (id === "b5") {
        main.innerHTML = "Button 5 clicked";
    } else {
        main.innerHTML = "";
    }

    prevButton = button;
};

btns.forEach((button) => {
    button.addEventListener("click", btnClickHandle);
});
