const timeEl=document.querySelector(".time")
const btnToggle=document.querySelector(".toggle")

function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML=`${hours}:
    ${minutes<10 ? `0${minutes}`: minutes}:
    ${seconds<10 ? `0${seconds}`: seconds}`
}
btnToggle.addEventListener("click",(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})

setTime()
setInterval(setTime,1000)