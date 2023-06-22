// Task 1:

// let body = document.querySelector('body');
// let title = document.querySelector('.title');
// let text = document.querySelector('p');
// let btn = document.querySelector('#btn');

// console.log(body)
// console.log(title)
// console.log(text)
// console.log(btn)

// btn.addEventListener("click", function () {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = '#' + randomColor;
// })



// Task 2:

// let btn = document.querySelector('#btn');
// let set = document.querySelector('.set')
// console.log(btn);

// let count = 0;

// btn.addEventListener('click', () => {
//     count++;
//     updateDisplay();
// })

// function updateDisplay() {
//     set.innerHTML = count;
// }



// Task 3:

let btn = document.querySelector('.btn')
let img = document.querySelector('.img')

btn.addEventListener('click', () => {
    img.setAttribute('src', './image/bmw2.jpg')
})