//1
let password = 'flowers';
let question = prompt('Введите пароль');

if (question === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

//2
//первый вариант
let c = 9;

if (c > 0 && c < 10) {
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
let anyNumber = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(anyNumber)) {
    console.log('Введите число!'); 
} else {
    console.log('Добро пожаловать!');
}


if (isNaN(anyNumber)) {
    console.log('Введите число!');
} else if (anyNumber % 2 === 0) {
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

//8 вариант с confirm
let clientOS1 = confirm('Тип OC Вашего телефона Android?');

if (clientOS1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Установите версию приложения для iOS по ссылке');
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


//9 основной вариант
let quest1 = Number(prompt('Укажите вашу ОС: нажмите "1" для Android и нажмите "0" для iOS'));
let quest2 = Number(prompt('Введите год выпуска вашего телефона'));

if (quest1 === 1 && quest2 >= 2015) { 
    console.log('Установите версию приложения для Android по ссылке');
} else if (quest1 === 0 && quest2 >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке'); 
} else if (quest1 === 1 && quest2 < 2015) {
    console.log('Установите облегченную версию для Android по ссылке');
} else {
	console.log('Установите облегченную версию для iOS по ссылке');
}

// вариант с confirm
let question1 = 'Установите версию приложения для Android по ссылке';
let question2 = 'Установите версию приложения для iOS по ссылке';
let question3 = 'Установите облегченную версию для Android по ссылке';
let question4 = 'Установите облегченную версию для iOS по ссылке';

if (confirm("У Вас Android 2015 года выпуска и позже") === true) {
    console.log(question1);
} else if (confirm("У Вас iOS 2015 года выпуска и позже") === true) {
    console.log(question2); 
} else if (confirm("У Вас Android ранее 2015 года выпуска") === true) {
    console.log(question3);
} else {
    console.log(question4);
}


// вариант с confirm 2
let inf1 = 'Установите версию приложения для Android по ссылке';
let inf2 = 'Установите версию приложения для iOS по ссылке';
let inf3 = 'Установите облегченную версию для Android по ссылке';
let inf4 = 'Установите облегченную версию для iOS по ссылке';

if (confirm("У Вас Android 2015 года выпуска и позже") === true) {
    console.log(inf1);
} else if (confirm("У Вас iOS 2015 года выпуска и позже") === true) {
    console.log(inf2); 
} else if (confirm("У Вас Android ранее 2015 года выпуска") === true) {
    console.log(inf3);
} else if (confirm("У Вас iOS ранее 2015 года выпуска") === true) {
    console.log(inf4);
} else {
    console.log("Не поддерживается");
}


// вариант с confirm 3
let OS = confirm('Тип Вашей OC iOS?');
let year = prompt('Введите год выпуска Вашего телефона');

if (OS) {
    if (year < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    } 

} else if (year < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    } 


// вариант с confirm 4
let OS1 = confirm('Тип вашей OC iOS?');
let year1 = confirm('Ваше устройство было выпущено позже 2015 года?');

if (OS1) {
    if (year1) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    } 

} else {
    if (!year1) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    } 
}


//шаблонная строка `some ${value}`: 

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
