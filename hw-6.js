//1



//2
let num = [1, 5, 4, 10, 0, 3];
let result = num.indexOf(4);

console.log(result);

//3
let number = [1, 3, 5, 10, 20];
number = number.join(' ');

console.log(number);

//4 не совсем понятно задание и тема
let extra = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

for (let item of extra) {
    for (let i = 0; i < item.length; i++) {
        for (let n = 0; n < item.length; n++) {
            console.log(item[i],[n]);
        } 
    }
}

console.log(extra);
развитие

//5
let mas = [1, 1, 1];
let numbers = mas.push(2, 2, 2);
console.log(mas);

//6 удалить элемент из массива a - через точку делаем как в п8?
let set = [9, 8, 7, 'a', 6, 5];
set = set.sort();
console.log(set);


let set = [9, 8, 7, 'a', 6, 5];
set = set.sort() =>
console.log(set);


//7 доделать
let riddle = [9, 8, 7, 6, 5];

let riddleNumber = prompt('Угадайте число') 
    if (riddleNumber === riddle) {
        alert ('Угадал');
    } else {
        alert ('Не угадал');
    }

//8
let string = 'abcdef';
newArray = string.split("").reverse().join("");
console.log(newArray);

//9











