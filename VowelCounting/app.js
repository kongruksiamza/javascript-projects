const countEl = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    let vowelCount = 0
    for (let word of input.value){
        word.match(/([aeiou])/i) ? vowelCount++ : ""
    }
    countEl.innerText=`${vowelCount}`
})