const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input=>{
    input.addEventListener("input",(e)=>{
        //ตัวเลขที่ป้อนเข้ามา
        let tempValue = parseInt(e.target.value)
        //ชื่อหน่วยอุณหภูมิ
        let inputName = e.target.name

        if(e.target.value === ""){
            celciusInput.value=null
            fahrenheitInput.value=null
            kelvinInput.value=null
            return
        }
        //กระบวนการแปลงอุณหภูมิ
        if(inputName === "celcius"){
            // c->f
            let fahrenheit = tempValue *1.8 +32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            // c -> k
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "fahrenheit"){
            //f -> c
            let celcius = (tempValue-32)/1.8
            celciusInput.value = celcius.toFixed(2)

            // f -> k
            let kelvin = (tempValue-32)/1.8+273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "kelvin"){
            //k ->c
            let celcius = tempValue-273
            celciusInput.value = celcius.toFixed(2)

            //k->f
            let fahrenheit = (tempValue-273)*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})