/* SHOW/HIDE MOBILE MENU */

const burgerButton = document.getElementById("burgerButton");
const navMobile = document.querySelector(".header__grid_nav_mobile");
const overlayBlack = document.querySelector('.overlayBlack');

burgerButton.addEventListener("click", function () {
  navMobile.classList.toggle('none');
  document.body.classList.toggle('overFlowY');
  overlayBlack.classList.toggle('none');
});

/* INIT AOS */

AOS.init();
