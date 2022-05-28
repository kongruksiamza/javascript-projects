const eyeIcon = document.querySelector("#eye")
const passwordEl = document.querySelector("#password")

eyeIcon.addEventListener("click",()=>{
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye","fa-eye-slash")
        passwordEl.setAttribute("type","text")
    }else{
        eyeIcon.classList.replace("fa-eye-slash","fa-eye")
        passwordEl.setAttribute("type","password")
    }
})