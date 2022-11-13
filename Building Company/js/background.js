const HighSection = document.querySelector(`.high-menu-section`);

const ProductInfo2 = {
   MenuBackground: HighSection.querySelector(`.background-for-menu`),
}

window.addEventListener(`scroll`, Backgroudscroll);
Backgroudscroll();

function Backgroudscroll() {
   const triggerBottom = window.scrollY;
   const WidthX = window.innerWidth;

   if (WidthX < 1000) {
      ProductInfo2.MenuBackground.classList.add(`background-for-menu-start`);
    ProductInfo2.MenuBackground.classList.remove(`background-for-menu-end`);
   }
   else if (triggerBottom > 124 && WidthX >= 1000) {
    ProductInfo2.MenuBackground.classList.add(`background-for-menu-start`);
    ProductInfo2.MenuBackground.classList.remove(`background-for-menu-end`);
   }
   else {
      ProductInfo2.MenuBackground.classList.add(`background-for-menu-end`);
      ProductInfo2.MenuBackground.classList.remove(`background-for-menu-start`);
   }
}