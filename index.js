"use strict";

const body = document.querySelector("body");
const themeIcon = document.querySelector(".theme");
const logo = document.querySelector(".logo img");
const speak = document.querySelector(".speak");
const stop = document.querySelector(".stop");
const clear = document.querySelector(".clear");
const textArea = document.querySelector("textarea");
const selectVoices = document.querySelector("select");

// change theme
themeIcon.addEventListener("click", function (e) {
  // toggle class with color changes
  body.classList.toggle("dark-theme");

  // change sun and moon SVGs
  const icon = e.currentTarget.children[0];
  let iconHref = icon.href;
  if (iconHref.baseVal === "./imgs/symbol-defs.svg#icon-sun") {
    iconHref.baseVal = "./imgs/symbol-defs.svg#icon-moon";
  } else {
    iconHref.baseVal = "./imgs/symbol-defs.svg#icon-sun";
  }

  // change logo icon
  if (logo.getAttribute("src") === "./imgs/logo-blue.png") {
    logo.setAttribute("src", "./imgs/logo-white.png");
  } else {
    logo.setAttribute("src", "./imgs/logo-blue.png");
  }
});

// generate speach

let speech = new SpeechSynthesisUtterance();
let voices = [];

// add available voices to select options
window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  // use first voice by default
  speech.voice = voices[0];
  console.log(voices[0]);

  voices.forEach((voice, i) => {
    selectVoices.options[i] = new Option(voice.name, i);
  });
};

// changing voice when changing option
selectVoices.addEventListener("change", function () {
  speech.voice = voices[selectVoices.value];
});

// speack when pressing speak btn
speak.addEventListener("click", function () {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

// stop speaking when stop is pressed
stop.addEventListener("click", () => window.speechSynthesis.cancel());

// clear textarea when clear is pressed
clear.addEventListener("click", () => (textArea.value = ""));
