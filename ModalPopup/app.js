const openBtn=document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBtn.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})