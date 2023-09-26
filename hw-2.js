//1
let a = 10;
alert(a);

a = 20;
alert(a);

//2
let dateOfLaunch = "9 января 2007 года";
alert(`Год выпуска первого iPhone ${dateOfLaunch}`);

//3
let nameOfCreator = "Brendan Eich";
alert(`Имя создателя языка JavaScript ${nameOfCreator}`);

//4
let first = 10;
let second = 2;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);

//5 Math.pow()-аналог 
let result=2 ** 5;
alert(result);


//6
let one = 9;
let two = 2;
let remainder= a % b;
alert(remainder);

//7 непонятен смысл задания
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//8
let age= Number(prompt('Сколько вам лет?')); 
alert(age);

//9.0
const user = {
    name: 'Jack',
    age: 29,
    isAdmin: true,
};

//9.1
user = {
    name: 'Jack',
    age: 29,
    isAdmin: true,
};

user['cityOfResidence'] = 'London';

//9.2
user = {
    name: 'Jack',
    amount: 33,
    isAdmin: true,
};

user['city of residence'] = 'London';

//9.3
const user = {
    name: 'Jack',
    amount: 33,
    isAdmin: true,
};

user['city of residence'] = 'London';
delete user.cityOfResidence;
console.log(user);

//9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//10
let name = prompt('What is your name?');
alert(`Привет, ${name}!`);

