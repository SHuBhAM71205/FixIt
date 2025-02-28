let ToggleActive = document.querySelector("#active-deactive");
console.log(ToggleActive);


ToggleActive.onclick = () => {
    console.log("Toggled");
    
    ToggleActive.classList.toggle("status-active");
}