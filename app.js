const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn-hero");
const mainSection = document.querySelector("main");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  random = Math.floor(Math.random() * colors.length);
  mainSection.style.backgroundColor = colors[random];
  colorSpan.innerHTML = colors[random];
});
