//1
a=10;
alert(a);

a=20;
alert(a);

//2
let dateOfLaunch = "9 января 2007 года";
alert(`Год выпуска первого iPhone ${dateOfLaunch}`);

//3
let nameOfCreator = "Brendan Eich";
alert(`Имя создателя языка JavaScript ${nameOfCreator}`);

//4
a=10;
b=2;
alert(a+b);

a=10;
b=2;
alert(a-b);

a=10;
b=2;
alert(a*b);

a=10;
b=2;
alert(a/b);

//5 Math.pow()-аналог 
let result=(2 ** 5);
alert(result);


//6
a=9;
b=2;
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
alert(33);

//9
const user = {
    name: 'Jack',
    amount: 33,
    isAdmin: true,
};

let info= prompt('Какую информацию хотите узнать о пользователе?');
alert(user.name);

//10
let name = prompt('What is your name?');
alert(`Привет, ${name}!`);
