const Section = document.querySelector(`.chairmens-section`);

const ProductInfo = {
    FirstTitle: Section.querySelector(`.chairmens-title`),
    SecondTitle: Section.querySelector(`.chairmens-atr-sub-title-box`),
    FirstBox: Section.querySelector(`.chairmens-img-box-1`),
    SecondBox1: Section.querySelector(`.design-box-1`),
    SecondBox2: Section.querySelector(`.design-box-2`),
    SecondBox3: Section.querySelector(`.design-box-3`),
    FirstLine: Section.querySelector(`.chairmens-sub-line-blue-1`),
    SecondLine: Section.querySelector(`.chairmens-sub-line-blue-2`),

}

window.addEventListener(`scroll`, ChairmensAnimation);
ChairmensAnimation();

function ChairmensAnimation() {
   const scrollY = window.scrollY;
   const WidthX = window.innerWidth;
   if (scrollY > 1390 && WidthX >= 800) {
    ProductInfo.FirstTitle.classList.add(`chairmens-title-anim-start`);
   } else if (scrollY > 1990 && WidthX < 800) {
    ProductInfo.FirstTitle.classList.add(`chairmens-title-anim-start`);
   }
   if (scrollY > 1410 && WidthX >= 800) {
    ProductInfo.FirstLine.classList.add(`chairmens-sub-line-blue-1-start`);
   } else if (scrollY > 2010 && WidthX < 800) {
    ProductInfo.FirstLine.classList.add(`chairmens-sub-line-blue-1-start`);
   }
   if (scrollY > 1600 && WidthX >= 800) {
    ProductInfo.SecondTitle.classList.add(`chairmens-atr-sub-title-box-start`);
   } else if (scrollY > 2200 && WidthX < 800) {
    ProductInfo.SecondTitle.classList.add(`chairmens-atr-sub-title-box-start`);
   }
   if (scrollY > 1650 && WidthX >= 800) {
    ProductInfo.FirstBox.classList.add(`chairmens-img-box-1-start`);
   } else if (scrollY > 2250 && WidthX < 800) {
    ProductInfo.FirstBox.classList.add(`chairmens-img-box-1-start`);
   }
   if (scrollY > 1820 && WidthX >= 800) {
    ProductInfo.SecondLine.classList.add(`chairmens-sub-line-blue-2-start`);
   } else if (scrollY > 2420 && WidthX < 800) {
    ProductInfo.SecondLine.classList.add(`chairmens-sub-line-blue-2-start`);
   }
   if (scrollY > 2200 && WidthX >= 800) {
    ProductInfo.SecondBox1.classList.add(`design-box-1-start`);
   } else if (scrollY > 2800 && WidthX < 800) {
    ProductInfo.SecondBox1.classList.add(`design-box-1-start`);
   }
   if (scrollY > 2250 && WidthX >= 800) {
    ProductInfo.SecondBox2.classList.add(`design-box-2-start`);
   } else if (scrollY > 2850 && WidthX < 800 && WidthX >= 500) {
    ProductInfo.SecondBox2.classList.add(`design-box-2-start`);
   } else if (scrollY > 2950 && WidthX < 500) {
    ProductInfo.SecondBox2.classList.add(`design-box-2-start`);
   }
   if (scrollY > 2300 && WidthX >= 800) {
    ProductInfo.SecondBox3.classList.add(`design-box-3-start`)
   } else if (scrollY > 2900 && WidthX < 800 && WidthX >= 500) {
    ProductInfo.SecondBox3.classList.add(`design-box-3-start`)
   } else if (scrollY > 3250 && WidthX < 500) {
    ProductInfo.SecondBox3.classList.add(`design-box-3-start`);
   }
}