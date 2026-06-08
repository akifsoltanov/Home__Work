let btn = document.querySelector(".btn");
let img = document.querySelector(".img");

btn.addEventListener("click", () => {
  if (img.src.includes("boz-bmw.jpg")) {
    img.src = "./image/qara-bmw.jpg";
  } else {
    img.src = "./image/boz-bmw.jpg";
  }
});
