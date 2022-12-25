let elementWidth = '120px';
const width = Number.parseInt(elementWidth);
console.log(width);
console.log(typeof width);

let elementHeight = '452.45px';
const height = Number.parseFloat(elementHeight);
console.log(height);
console.log(typeof height);

let salary = 25642.45398;
salary = Number(salary.toFixed(2));
console.log(salary);

// ------------- Задача
// Попросити користувача ввести число та ступінь
// возвести число в ступінь та вивести результат в консоль
// -----------------------
// 1. Попросити ввести число та зберегти в змінну
// 2. Попросити ввести ступінь та зберегти в змінну
// 3. Возвести число в ступінь
// 4. Вивести результат в консоль

// let integer = prompt('Введіть число');
// integer = Number(integer);
// console.log(integer);
// let power = prompt('Введіть ступінь');
// power = Number(power);
// console.log(power);

// let result = Math.pow(integer, power);
// console.log(result);

// ----------------- Генеруємо випадкові числа
// Math.random();
// Math.round();

let maxInt = 60;
let minInt = 20;

let randomInt = Math.round(Math.random() * (maxInt - minInt) + minInt);
console.log(randomInt);

const colors = ['red', 'orange', 'green', 'blue', 'yellow', 'teal'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

console.log(color);
document.body.style.backgroundColor = color;