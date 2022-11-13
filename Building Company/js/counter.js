const Firstcounter = document.querySelector(`.counter-for-counter-box-1`);
const Secondcounter = document.querySelector(`.counter-for-counter-box-2`);
const Thirdcounter = document.querySelector(`.counter-for-counter-box-3`);
const Forthcounter = document.querySelector(`.counter-for-counter-box-4`);
const InfocounterBox = document.querySelector(`.info-counter-box`);

let FirstcounterTime = 0;
let SecondcounterTime = 0;
let ThirdcounterTime = 0;
let ForthcounterTime = 0;

setInterval(Counterfunction, 10);

function Counterfunction() {
    const ScrY = window.scrollY;

    if (ScrY > 150) {
      
      Addcounter();

      InfocounterBox.classList.add(`info-counter-box-opacity`);

    }
}

function Addcounter() {
    if (FirstcounterTime < 1500) {
        FirstcounterTime += 5;
        Firstcounter.innerText = FirstcounterTime;
    }
    
    if (SecondcounterTime < 22) {
        SecondcounterTime++;
        Secondcounter.innerText = SecondcounterTime;
    }

    if (ThirdcounterTime < 15640) {
        ThirdcounterTime += 20;
        Thirdcounter.innerText = ThirdcounterTime;
    }

    if (ForthcounterTime < 3500) {
        ForthcounterTime += 10;
        Forthcounter.innerText = ForthcounterTime;
    }
}