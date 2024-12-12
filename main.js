//Declears variables
const navBtn = document.querySelector("#nav__btn");
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav__menu");

//Adds event listenner to toggle menu
navBtn.addEventListener("click", toggleMenu);
let isclicked = false;

//menu function
function toggleMenu() {
  if (!isclicked) {
    btnOpen.classList.add("inactive");
    btnClose.classList.remove("inactive");
    nav.classList.add("nav__active");
    navMenu.classList.remove("inactive");

    isclicked = !isclicked;
  } else {
    btnClose.classList.add("inactive");
    btnOpen.classList.remove("inactive");
    nav.classList.remove("nav__active");
    navMenu.classList.add("inactive");

    isclicked = !isclicked;
  }
}
