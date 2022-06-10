const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItem = []

filter.addEventListener("input",(e)=>{
    // thailand => thailand
    const search = e.target.value.toLowerCase()
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){
            //แสดงรายการ
            item.classList.remove("hide")
        }else{
            //ซ่อนรายการไม่เกี่ยวข้อง
            item.classList.add("hide")
        }
    })
})

async function getData(){
    const url = "https://restcountries.com/v2/all"
    const response = await fetch(url)
    const items=await response.json()
    result.innerHTML=""
    items.forEach(data => {
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML=`
            <img src="${data.flag}">
            <div class="info">
                <h4>${data.name}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `
        result.appendChild(li)
    });
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

getData()