//1
let password = 'пароль';
let question = prompt('Введите пароль');

if(password === 'пароль') {
    console.log ('Пароль введен верно');
} else {
    ('Пароль введен неправильно');
}

//2
let с = 10;

//первый вариант
if (с > 0) {
    console.log('Верно');
} else if (с < 10) {
    consol.log('Верно');
} else {
    console.log('Неверно');
}

//второй вариант
let с = 0 && 10 && -3 && 2;

if (с > 0 && с < 10) {
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
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
         console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
         console.log('лето');
        break; 
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
            break;
    case 11:
        console.log('осень');
            break;
    case 12:
        console.log('зима');
            break;
    case > monthNumber:
        console.log('месяц указан некорректно');
        break;
}
