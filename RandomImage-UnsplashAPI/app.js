const container = document.querySelector(".container")
const rows = 4
const cols = 3
const unsplashRandom = `https://source.unsplash.com/random/`

const randomNumber = () => Math.floor(Math.random() * 500)

for (let i = 0; i < rows * cols; i++) {
    const imageEl = document.createElement("img")
    imageEl.src = `${unsplashRandom}${randomNumber()}`
    container.appendChild(imageEl)
}