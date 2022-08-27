for (var i = 1; i <= 8; i++) {
    document.getElementById('images').innerHTML += `<div class="gallery-img">
    <a href="foods-images/small/s_${i}.jpg" data-lightbox="gallery">
        <img src="foods-images/small/s_${i}.jpg" alt="${i}">
    </a>
</div>`
}