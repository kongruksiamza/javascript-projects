const timeEl=document.querySelector(".time")
const btnToggle=document.querySelector(".toggle")
const onesecond = 1000
function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML=`${hours}:
    ${String(minutes).padStart(2, '0')}:
    ${String(seconds).padStart(2, '0')}`
}
btnToggle.addEventListener("click",(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerText="โหมดกลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerText="โหมดกลางวัน"
    }
})

setInterval(setTime,onesecond)