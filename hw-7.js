/*//1
let str = 'js';
console.log(str.toUpperCase());

//2
function find(array, string) {
    return array.filter((el) => el.toLowerCase().startsWith(string.toLowerCase()));
} 

console.log(find(['apple', 'Apricot', 'banana', 'april'], 'ap'));

//3
//ближайшее целое
console.log(Math.round(32.58884));
//ближайшее меньшее
console.log(Math.floor(32.58884));
//ближайшее большее
console.log(Math.ceil(32.58884));


//4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//5
//рандомное число
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

console.log(randomNum(1, 10));

//рандомное целое число
function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
};
    
console.log(randomNum(1, 10));


//6
function get(numInteger) {
    let newArray = []; 
    let arrayLength = Math.floor(numInteger / 2);

    for (let i = 0; i < arrayLength; i++) {
        let randomArray = Math.floor(Math.random() * numInteger);
        newArray.push(randomArray);
    } return newArray;
}

console.log(get(7));


//7 
function enter(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

console.log(enter(3, 15));


//8
let myDate = new Date("10/31/2023");
console.log(myDate); 

let myDate = new Date("31 October 2023");
console.log(myDate); 

let myDate = new Date();
console.log(myDate); 

//9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//10
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
let myDate = new Date(); 
let hours = myDate.getHours().toString().padStart(2, '0');
let minutes = myDate.getMinutes().toString().padStart(2, '0');
let seconds = myDate.getSeconds().toString().padStart(2, '0');

let fullDate = "Дата: " + myDate.getDate() + 
" " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + 
" - это " + days[myDate.getDay()] + ". " +
"Время: " + hours + ":" +
minutes + ":" + seconds + "."
    
console.log(fullDate);
*/

//11
function show2() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);

    let q1 = prompt('Чему равнялся первый элемент массива?');
    let q2 = prompt('Чему равнялся последний элемент массива?');


    if (q1.toLowerCase() === list[0].toLowerCase() && q2.toLowerCase() === list[list.length - 1].toLowerCase()) {
        console.log('Поздравляем! вы угадали!');
    } else if (q1.toLowerCase() === list[0].toLowerCase() || q2.toLowerCase() === list[list.length - 1].toLowerCase()) {
        console.log('Вы были близки к победе!');
    } else {
        console.log('К сожалению, вы не угадали');
    }
}








