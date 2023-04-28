const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn-hero");
const mainSection = document.querySelector("main");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  color = "#";
  for (i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }
  colorSpan.innerHTML = color;
  mainSection.style.backgroundColor = color;
});
