const container = document.querySelector(".container")
const rows = 4
const cols = 3

function randomNumber(){
    return Math.floor(Math.random()*500)
}
for(let i = 0;i<rows*cols;i++){
    //ภาพ
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    //พื้นที่แสดงภาพ
    const imageEl = document.createElement("img")
    imageEl.src=url
    container.appendChild(imageEl)
}