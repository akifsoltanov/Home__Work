let body = document.querySelector('body');
let toggle = document.querySelector(".toggle");
toggle.onclick = function () {
    body.classList.toggle('active');
    toggle.classList.toggle('active');
}