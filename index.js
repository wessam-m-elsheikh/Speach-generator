"use strict";

const body = document.querySelector("body");
const themeIcon = document.querySelector(".theme");
const logo = document.querySelector(".logo img");

themeIcon.addEventListener("click", function (e) {
  body.classList.toggle("dark-theme");
  console.log(logo.getAttribute("src"));

  const icon = e.currentTarget.children[0];
  let iconHref = icon.href;
  if (iconHref.baseVal === "./imgs/symbol-defs.svg#icon-sun") {
    iconHref.baseVal = "./imgs/symbol-defs.svg#icon-moon";
  } else {
    iconHref.baseVal = "./imgs/symbol-defs.svg#icon-sun";
  }

  if (logo.getAttribute("src") === "./imgs/logo-blue.png") {
    logo.setAttribute("src", "./imgs/logo-white.png");
  } else {
    logo.setAttribute("src", "./imgs/logo-blue.png");
  }
});
