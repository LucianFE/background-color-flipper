"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("button");
const colorHex = document.querySelector("span");

function randomNum() {
  return Math.floor(Math.random() * 16);
}

function changeBackgroundColor() {
  let bgColor = "#";
  for (let i = 0; i < 6; i++) {
    bgColor += hex[randomNum()];
  }
  document.body.style.backgroundColor = bgColor;
  colorHex.textContent = bgColor;
}

btn.addEventListener("click", changeBackgroundColor);
