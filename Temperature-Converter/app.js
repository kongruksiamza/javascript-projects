const SCALES = [
    {th: `เซลเซียส`,en: `celcius`},
    {th: `ฟาเรนไฮน์`,en: `fahrenheit`},
    {th: `เคลวิน`,en: `kelvin`},
]
for (let scale of SCALES) {
    document.querySelector('.container').innerHTML += `
    <label for="${scale.en}">องศา${scale.th}</label>
    <input type="number" name="${scale.en}" id="${scale.en}">
    `
}

const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")
kelvinInput.min = `-273.15`
kelvinInput.min = `-459.67`
kelvinInput.min = `0`
const c2f = (temp) => temp * 1.8 + 32
const c2k = (temp) => temp + 273.15
const f2c = (temp) => (temp-32)/1.8
const f2k = (temp) => c2k(f2c(temp))
const k2c = (temp) => temp - 273.15
const k2f = (temp) => c2f(k2c(temp))

const clearInput = () => {
    tempInputs.forEach(input => {
        input.value = null
    })
}

const validateTemp = (temp) => {
    if (temp < 0) {
        clearInput()
        alert("Error: Lower Bound Limit")
    }
}

tempInputs.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue = parseFloat(e.target.value)
        let inputName = e.target.name

        if(e.target.value === "") clearInput()

        switch (inputName) {
            case "celcius":
                fahrenheitInput.value = c2f(tempValue).toFixed(2)
                kelvinInput.value = c2k(tempValue).toFixed(2)
                break
            case "fahrenheit":
                celciusInput.value = f2c(tempValue).toFixed(2)
                kelvinInput.value = f2k(tempValue).toFixed(2)
                break
            case "kelvin":
                celciusInput.value = k2c(tempValue).toFixed(2)
                fahrenheitInput.value = k2f(tempValue).toFixed(2)
                break
        }
        validateTemp(kelvinInput.value)
    })
})