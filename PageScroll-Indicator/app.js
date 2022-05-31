const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    // 0 - 1
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
}