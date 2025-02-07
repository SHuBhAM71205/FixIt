const loginSignupBtn=document.querySelectorAll('.login-signup-sel');

function loginSignupbtnClickHandel(e){
    let id=e.target.id;
    if(id=='Sign-up'){
        loginSignupBtn[1].style.color="black"
        loginSignupBtn[1].style.backgroundColor="antiquewhite"
        loginSignupBtn[0].style.color="antiquewhite"
        loginSignupBtn[0].style.backgroundColor="#0F1035"
        document.getElementById("submit-btn").innerHTML="Signin"
    }
    else{
        loginSignupBtn[0].style.color="black"
        loginSignupBtn[0].style.backgroundColor="antiquewhite"
        loginSignupBtn[1].style.color="antiquewhite"
        loginSignupBtn[1].style.backgroundColor="#0F1035"
         document.getElementById("submit-btn").innerHTML="Login"
    }
}

loginSignupBtn.forEach((element) => {
    element.addEventListener("click",loginSignupbtnClickHandel)
});