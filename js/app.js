const carouselItems = document.querySelectorAll(".carousel__item");
let slidePosition = 0;
let totalSlides = carouselItems.length;

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

function hideAllSlides() {
    for (let slide of carouselItems) {
        slide.classList.remove('carousel__active');
        slide.classList.add('carousel__hidden');
    }
}


function leftSlide() {
    hideAllSlides();

    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    }else {
        slidePosition--;
    }

    carouselItems[slidePosition].classList.add('carousel__active');
}

function rightSlide() {
    hideAllSlides();

    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }else {
        slidePosition++;
    }

    carouselItems[slidePosition].classList.add('carousel__active');
}

function autoPlay() {
    rightSlide();
}

let timer = setInterval(autoPlay, 6000);

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 6000);
}

rightBtn.addEventListener('click', () => {
    rightSlide();
    resetTimer();
});

leftBtn.addEventListener('click', () => {
    leftSlide();
    resetTimer();
});