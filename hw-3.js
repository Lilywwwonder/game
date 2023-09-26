//1
let password = 'пароль';
let question = prompt('Введите пароль');

if(password === 'пароль') {
    console.log ('Пароль введен верно');
} else {
    ('Пароль введен неправильно');
}

//2
let c = 10;

//первый вариант
if (10 > 0) {
    console.log('Верно');
} else if (10 < 10) {
    consol.log('Верно');
} else {
    console.log('Неверно');
}

//второй вариант
let с = 0 && 10 && -3 && 2;

if (10 > 0 && 10 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//3
let d = 10;
let e = 15;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number(a);
b = Number(b);
alert(a + b);

//5
let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('месяц указан некорректно');
        break;
}

//6 Done

//7
let anyNumber = prompt('Пожалуйста, введите любое число');

console.log(isNaN(anyNumber));

if (anyNumber % 2 === 0) {
    alert('Число четное'); 
    } else {
        alert('Число нечетное');
    }

//8 первый вариант === number
let clientOS = Number(prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS'));

if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('OC не поддерживается');
}

/*8 второй вариант ===
let clientOS = prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS');

if (clientOS === "1") {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === "0") {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('OC не поддерживается');
}
*/

/*8 третий вариант ==
let clientOS = prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS');

if (clientOS == 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS == 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('OC не поддерживается');
}
*/


//9
let question1 = Number(prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS'));
let question2 = Number(prompt('Введите год выпуска вашего телефона'));

if (question1 === 1 && question2 >= 2015) { 
    console.log('Установите версию приложения для Android по ссылке');
} else if (question1 === 0 && question2 >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке'); 
} else if (question1 === 1 && question2 < 2015) {
    console.log('android');
} else {
		console.log('ios');
}

/* вариант первый === КАК СДЕЛАТЬ ПРАВИЛЬНО???
let question1 = Number(prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS'));
let question2 = Number(prompt('Укажите год выпуска вашего телефона'));
let answer = question1 === 1 && question2 >=2015 ? 'Установите версию приложения для Android по ссылке' : 'Установите версию приложения для iOS по ссылке' || question1 === 1 && question2 <2015 ? 'Установите облегченную версию приложения для Android по ссылке' : 'Установите облегченную версию приложения для iOS по ссылке';
console.log(answer);
*/

/* вариант второй == КАК СДЕЛАТЬ ПРАВИЛЬНО???
let question1 = Number(prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS'));
let question2 = Number(prompt('Укажите год выпуска вашего телефона'));
let answer = question1 == 1 && question2 >=2015 ? 'Установите версию приложения для Android по ссылке' : 'Установите версию приложения для iOS по ссылке' || question1 == 1 && question2 <2015 ? 'Установите облегченную версию приложения для Android по ссылке' : 'Установите облегченную версию приложения для iOS по ссылке';
console.log(answer);
*/
