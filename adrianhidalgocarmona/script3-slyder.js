const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }
    const newTransformValue = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${newTransformValue})`;
}

setInterval(showNextSlide, 3000);