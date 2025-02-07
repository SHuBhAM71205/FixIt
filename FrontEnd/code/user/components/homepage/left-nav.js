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
  button.style.marginLeft = "4px";
  button.style.textOverflow = "clip";

  if (id === "b1") {
    
  }
   else if (id === "b5") {
  
  }
   else if (id ==="b2"){
    
  }
  else{

  }

  prevButton = button;
};

btns.forEach((button) => {
  button.addEventListener("click", btnClickHandle);
});     