// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const images = ['../adrianhidalgocarmona/img/hombre1.jpg', '../adrianhidalgocarmona/img/hombre2.jpg', '../adrianhidalgocarmona/img/hombre3.jpg'];
    let currentIndex = 0;
    const dynamicImage = document.getElementById('dynamicImage');

    dynamicImage.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        dynamicImage.src = images[currentIndex];
    });
});