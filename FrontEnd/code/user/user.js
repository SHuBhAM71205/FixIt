const btn=document.querySelectorAll(".button")

const leftNav=document.getElementsByClassName("left-nav")



const btnClickHandel=(event)=>{
    const id=event.target.id;
    const main=document.querySelector(".main-content");   
    if(id=='b1'){
        main.innerHTML="hello";
    }
    else if(id=="b5"){
        main.innerHTML="";
    }
    else{
        main.innerHTML="";
    }
}

btn.forEach(button=>{
        button.addEventListener("click",btnClickHandel);
}
)

