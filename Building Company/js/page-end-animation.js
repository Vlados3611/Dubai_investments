const PageEndSection = document.querySelector(`.page-end-section`);

const ProductInfo3 = {
    FirstBox: PageEndSection.querySelector(`.page-end-title-box`),
    SecondBox: PageEndSection.querySelector(`.page-end-logo-box`),
}

window.addEventListener(`scroll`, PageEndAnimation);
PageEndAnimation();

function PageEndAnimation() {
    const scrollY = window.scrollY;
    const WidthX = window.innerWidth;

    if (scrollY > 3300 && WidthX >= 900) {
        ProductInfo3.FirstBox.classList.add(`page-end-title-box-start`);
        ProductInfo3.SecondBox.classList.add(`page-end-logo-box-start`);
    } else if (scrollY > 3850 && WidthX < 900 && WidthX >= 800) {
        ProductInfo3.FirstBox.classList.add(`page-end-title-box-start`);
        ProductInfo3.SecondBox.classList.add(`page-end-logo-box-start`);
       } else if (scrollY > 4250 && WidthX < 800 && WidthX >= 500) {
        ProductInfo3.FirstBox.classList.add(`page-end-title-box-start`);
        ProductInfo3.SecondBox.classList.add(`page-end-logo-box-start`);
       } else if (scrollY > 4700 && WidthX < 500) {
        ProductInfo3.FirstBox.classList.add(`page-end-title-box-start`);
        ProductInfo3.SecondBox.classList.add(`page-end-logo-box-start`);
       }
}