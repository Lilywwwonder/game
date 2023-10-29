//1 посмотреть
let randomNum = [1, 5, 4, 10, 0, 3];


for (let i = 0; i < randomNum.length; i++) {
    if (randomNum[i] == 10) {
        console.log(randomNum[i])
        break;
    } console.log(randomNum[i]);
} 


//2
let num = [1, 5, 4, 10, 0, 3];
let result = num.indexOf(4);

console.log(result);

//3
let number = [1, 3, 5, 10, 20];
number = number.join(' ');

console.log(number);

//4 выучить, задание сделано
let extra = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

for (let item of extra) {
    for (let i = 0; i < item.length; i++) {
        for (let n = 0; n < item.length; n++) {
            extra[i][n] = 1;
        }
    }
}

console.log(extra);

//5
let mas = [1, 1, 1];
let numbers = mas.push(2, 2, 2);
console.log(mas);


//6 
let set = [9, 8, 7, 'a', 6, 5];
set.sort().pop();
console.log(set);


//7
let riddle = [9, 8, 7, 6, 5];
let riddleNumber = prompt('Угадайте число');

    if (riddle.includes(Number(riddleNumber))) {
        alert ('Угадал');
    } else {
        alert ('Не угадал');
    }


//8
let string = 'abcdef';
newArray = string.split("").reverse().join("");
console.log(newArray);

//9
let arrayArr = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(arrayArr.flat());

//10 разобраться, задание сделано
let any = [2, 4, 9, 3];

for (let i = 0; i < any.length - 1; i++) {
    console.log(any[i] + any[i+1]);
};


//11 выучить тему, задание сделано
const numInteger = [1, 2, 3, 4];

let newArray = numInteger.map(numItem => {
    return Math.pow(numItem, 2)
});

console.log(newArray);

//12
const strings = ['cat', 'dog', 'panda'];
console.log(strings.length);

let everyLenght = strings.map(stringsLetter => {
    return stringsLetter.length
});

console.log(everyLenght);

//13 
function filterPositive(array) {
    return array.filter((num) => num < 0);
    }

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2]));

//14
const gen = [];
const newGen = [];

for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 11);
        gen.push(randomNum);
        if (randomNum % 2 === 0) {
            newGen.push(randomNum)
        }
}

console.log(gen);
console.log(newGen);

//15
const el = [];
const elLength = 6;
sum = 0;

for (let i = 0; i < elLength; i++) {
    const randomNum = Math.floor(Math.random() * 11);
        el.push(randomNum);
}

const getAverage = (el) => {
    const sum = el.reduce((acc, number) => acc + number, 0);
    return sum / elLength;
}

console.log(el);
console.log(getAverage(el));
