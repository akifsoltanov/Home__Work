// 1, printFullName

// let name = "Akif";
// let surname = "Soltanov";

// let printFullName = function () {
//     return `${name} ${surname}`;
// };
// console.log(printFullName());

// - - - - - - - - - - - - - - - - - - - - - -



// 2, printFullNameWithParam

// let printFullNameWithParam = (name1, name2) => {
//     let printName = `${name1} ${name2}`;
//     console.log(printName);
// };
// printFullNameWithParam("Akif", "Soltanov");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// 3, perimeter = 2 x(length + width)

// let width = parseFloat(prompt("Write the width of the rectangle"));
// let length = parseFloat(prompt("Write the length of the rectangle"));

// function perimeterOfRectangle() {
//     let perimeter = 2 * (width + length);
//     console.log("perimeterOfRectangle", perimeter);
//     return perimeter;
// }
// perimeterOfRectangle();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// 4, BMI, Underweight, NormalWeight, Overweight, Obese

// let height = parseFloat(prompt("Write the height in m"))
// let weight = parseFloat(prompt("write the check in kg"))

// function calculatesBMI() {
//     let bmi = weight / (height * height)
//     alert(bmi)
//     if (bmi < 18.5) {
//         alert('Underweight')
//     } else if (18.5 < bmi && bmi < 24.9) {
//         alert('Normal Weight')
//     } else if (25 < bmi && bmi < 29.9) {
//         alert('Overweight')
//     } else if (bmi > 30) {
//         alert('Obese')
//     }

// }
// calculatesBMI()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// 5, pow(x, n)

// let estimate = function (number, once) {
//     let result = number
//     for (let i = 1; i < once; i++) {
//         result *= number;
//     }
//     alert(result)
//     return result;
// }

// let number = prompt('what is the number')
// let once = prompt('How much')

// estimate(number, once)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -