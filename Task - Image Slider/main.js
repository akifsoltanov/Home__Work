let imgs = document.querySelector(".imgs");
let index = 0;
let total = document.querySelectorAll(".imgs img").length;

let slider = document.querySelector(".slider");
let slideWidth = slider.offsetWidth;

window.addEventListener("resize", () => {
  slideWidth = slider.offsetWidth;
});

document.querySelector(".right").addEventListener("click", () => {
  index++;
  if (index > total - 1) {
    index = 0;
  }
  imgs.style.transform = `translateX(-${index * slideWidth}px)`;
});

document.querySelector(".left").addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = total - 1;
  }

  imgs.style.transform = `translateX(-${index * slideWidth}px)`;
});
