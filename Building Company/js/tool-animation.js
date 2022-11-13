const toolBackSection = document.querySelector(`.tool-background-section`);

const ProductInfo1 = {
    FirstTitle: toolBackSection.querySelector(`.h1-tool-background`),
    SecondTitle: toolBackSection.querySelector(`.h2-tool-background`),
    FirstImg: toolBackSection.querySelector(`.tool-background-1`),
    SecondImg: toolBackSection.querySelector(`.tool-background-2`),
    ThirdImg: toolBackSection.querySelector(`.tool-background-3`),
}

window.addEventListener(`scroll`, toolAnimation);

toolAnimation();

function toolAnimation() {
    const scrollY = window.scrollY;
    const WidthX = window.innerWidth;

    if (scrollY > 2700 && WidthX >= 800) {
        ProductInfo1.FirstTitle.classList.add(`h1-tool-back-animation`);
    } else if (scrollY > 3300 && WidthX < 800 && WidthX >= 500) {
        ProductInfo1.FirstTitle.classList.add(`h1-tool-back-animation`);
       } else if (scrollY > 3600 && WidthX < 500) {
        ProductInfo1.FirstTitle.classList.add(`h1-tool-back-animation`);
       }

    if (scrollY > 2750 && WidthX >= 800) {
        ProductInfo1.SecondTitle.classList.add(`h2-tool-back-animation`);
    } else if (scrollY > 3350 && WidthX < 800 && WidthX >= 500) {
        ProductInfo1.SecondTitle.classList.add(`h2-tool-back-animation`);
       } else if (scrollY > 3360 && WidthX < 500) {
        ProductInfo1.SecondTitle.classList.add(`h2-tool-back-animation`);
       }

    if (scrollY > 2900 && WidthX >= 800) {
        ProductInfo1.FirstImg.classList.add(`tool-back-img-1`);
        ProductInfo1.SecondImg.classList.add(`tool-back-img-2`);
        ProductInfo1.ThirdImg.classList.add(`tool-back-img-3`);
    } else if (scrollY > 3500 && WidthX < 800 && WidthX >= 500) {
        ProductInfo1.FirstImg.classList.add(`tool-back-img-1`);
        ProductInfo1.SecondImg.classList.add(`tool-back-img-2`);
        ProductInfo1.ThirdImg.classList.add(`tool-back-img-3`);
       } else if (scrollY > 4100 && WidthX < 500) {
        ProductInfo1.FirstImg.classList.add(`tool-back-img-1`);
        ProductInfo1.SecondImg.classList.add(`tool-back-img-2`);
        ProductInfo1.ThirdImg.classList.add(`tool-back-img-3`);
       }
}