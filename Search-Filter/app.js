const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItem = []

filter.addEventListener("input",(e)=>{
    const search = e.target.value
    const re = new RegExp(search, "i")
    listItem.forEach(item=> {
        itemText = item.innerText.split(/\r?\n/)[0]
        re.test(itemText) ? item.classList.remove("hide") : item.classList.add("hide")
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