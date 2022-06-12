const timeEl = document.querySelector(".time")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")

//1000 ms = 1s , 60s => 1m , 60m =>1h
let [milliseconds,seconds,minutes,hours]=[0,0,0,0]
let timer = null

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)

function startTimer(){
    if(timer!=null){
        clearInterval(timer)
    }   
    timer = setInterval(displayTime,10)
}

function pauseTimer(){
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)
    hours=0
    minutes=0
    seconds=0
    milliseconds=0
    timeEl.innerHTML="00:00:00:000"
}

function displayTime(){
    milliseconds+=10
    if(milliseconds==1000){
        milliseconds=0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    //ternary operator
    let h = hours<10 ? "0" + hours : hours
    let m = minutes<10 ? "0"+minutes : minutes
    let s = seconds<10 ? "0"+seconds : seconds
    let ms = milliseconds <10 ? "0"+milliseconds : milliseconds
    timeEl.innerHTML=`${h}:${m}:${s}:${ms}`
}