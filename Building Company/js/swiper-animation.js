const swiperSection = document.querySelector(`.swiper-section`);

window.addEventListener(`scroll`, SwiperAnimation);
SwiperAnimation();

function SwiperAnimation() {
    const scrollY = window.scrollY;
    const WidthX = window.innerWidth;

    if (scrollY > 1100 && WidthX >= 800) {
        swiperSection.classList.add(`swiper-animation`);
    } else if (scrollY > 1650 && WidthX < 800) {
        swiperSection.classList.add(`swiper-animation`);
    }
}