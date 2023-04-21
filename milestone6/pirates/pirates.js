const slider = document.querySelector('.slider');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const images = slider.querySelectorAll('img');
const caption = slider.querySelector('.caption');
let currentIndex = 0;

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    images[index].classList.add('active');
    caption.textContent = images[index].alt;

}

prevBtn.addEventListener('click', function () {
    console.log('boom3')
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

nextBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

showImage(currentIndex);
