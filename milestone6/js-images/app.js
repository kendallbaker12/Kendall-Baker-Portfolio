

const pics = [
    'url("./js-images/kendall-photo-2.jpg")',
    'url("./js-images/Kendall-photo-1.jpg")',
    'url("./js-images/Kendall-photo-3.jpg")',
    'url("./js-images/Kendall-photo-fish.jpg")',
    'url("./js-images/Kendall-photo-treelo.jpg")',
    'url("./js-images/Kendall-photo-Weather.jpg")',
]
const pic = document.getElementById('sec')

function showImage() {
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}

setInterval(showImage, 4000);