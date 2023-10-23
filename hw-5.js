/*//1
function min(a, b) {
    if (b < a) {
        return b;
    } else {
        return a;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

// второй вариант
function min(a, b) {
    return b < a ? b : a;
}

console.log(min(8, 4));
console.log(min(6, 6));


//2
function check(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(check(7));
console.log(check(22));


//3
//3.1 

function write(number) {
    console.log(Math.pow(number, 2));
}
   
write(10);

//3.2
 function show(number) {
    return number * number;
}
 console.log(show(4));


//4
function yourAge() {
    let age = Number(prompt('Сколько Вам лет?')); 
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 & age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Введите число!');
    }
}

yourAge();

//5
function check(a, b) {
    if ((isNaN(a)) || (isNaN(b))) {
        return 'Одно или оба значения не являются числом';
    }  else {
    return a * b;
    }
}

console.log(check(3, 5));


//6
function ask() {
    let question = prompt('Введите число от 0 до 10 включительно');
    if (!isNaN(question)) {
        return `${question} в кубе равняется ${Math.pow(question, 3)}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

console.log(ask());

// второй вариант
function ask() {
    let question = prompt('Введите число от 0 до 10 включительно');
    if (!isNaN(question) && question >= 0 && question <= 10) {
        return `${question} в кубе равняется ${Math.pow(question, 3)}`;
    } else {
        return 'Переданный параметр не является числом или не входит в диапазон от 0 до 10 включительно';
    }
}

console.log(ask());

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!не смотреть
function ask() {
    let question = prompt('Введите число от 0 до 10 включительно');
    if (!isNaN(question)) {
        return `${question} в кубе равняется ${Math.pow(question, 3)}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

console.log(ask());

function check() {
    if (question >= 0 && question <= 10) {
        console.log('Все ok');
    } else {
        console.log('Прочтите уcловия заново');
    }
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//7
let circle1 = {
    'radius': 10
}

circle1.getArea = function() {
    return Math.pow(this.radius, 2) * Math.PI;
}

circle1.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

let circle2 = {
    'radius': 9
}

circle2.getArea = function() {
    return Math.pow(this.radius, 2) * Math.PI;
}

circle2.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
}

console.log(circle2.getArea());
console.log(circle2.getPerimeter());
*/


//8 done
function show() {
    let ask = Number(prompt('Ведите номер месяца от 1 до 12'));
    if (ask >= 1 || ask <= 2 || ask === 12) {
        return 'Зима';
    } else if (ask >= 3 || ask <= 5) {
         return 'Весна';
    } else if (ask >= 6 || ask <= 8) {
        return 'Лето';
    } else if (ask >= 9 || ask <= 11) {
         return 'Осень';
    } else {
        return 'Введите номер!'
    }
}




