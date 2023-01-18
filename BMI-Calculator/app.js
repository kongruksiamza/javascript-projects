const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
const inputs = document.querySelectorAll('input')

const calculateBMI = (bmi) => {
    if (bmi < 18.5) {
        showResult(bmi, "ผอมเกินไป", "blue")
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        showResult(bmi, "ปกติ", "green")
    } else if (bmi >= 25 && bmi <= 29.9) {
        showResult(bmi, "อ้วน", "red")
    } else {
        showResult(bmi, "อ้วนเกินไป", "purple")
    }
}

for (let input of inputs) {
    input.addEventListener(`input`, () => {

        let weight = document.getElementById("weight").value
        let height = document.getElementById("height").value
        
        // start weird
        if (weight === '') {
            result.innerHTML = "กรุณาป้อนน้ำหนักของคุณ"
        } else if (height === '') {
            result.innerHTML = "กรุณาป้อนส่วนสูงของคุณ"
        // end weird
        } else {
            calculateBMI((weight / Math.pow(height /= 100, 2)).toFixed(2))
        }
    })
}

function showResult(bmi, msg, color) {
    result.style.background = color
    result.innerText = `ผลลัพธ์ = ${bmi} (${msg})`
}