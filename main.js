//VARIABLES
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector("header");
const body = document.body;

//FLAG(S)

//EVENT LISTENERS
btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);

//FUNCTIONS

function openMenu() {
  btnOpen.classList.add("inactive");
  btnClose.classList.remove("inactive");
  headerMenu.classList.remove("inactive");
  header.classList.add("header--active");
  body.classList.add("no-scroll");
}

function closeMenu() {
  btnOpen.classList.remove("inactive");
  btnClose.classList.add("inactive");
  headerMenu.classList.add("inactive");
  header.classList.remove("header--active");
  body.classList.remove("no-scroll");
}
