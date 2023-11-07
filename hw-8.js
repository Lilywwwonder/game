//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

// первый способ
people.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(people);


// второй способ
people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }

    if (a.age < b.age) {
        return -1;
    }
});

console.log(people);


//2
function isPositive(num) {
    if (num > 0) {
        return num;
    }
    }

function isMale(person) {
    if (person.gender === 'male') {
        return true;
    } 
    }

function filter(array, ruleFunction) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            newArray.push(array[i]);
        }
    }
        return newArray;
    }
    
console.log(filter([3, -4, 1, 9], isPositive)); 
 
    
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
    ];
    
console.log(filter(people, isMale)); 

//3 myDate неизменна, поэтому в консоли надо передать new Date напрямую (чтобы отсчитывалис секунды)
let myDate = new Date(); 
let interval = setInterval(() => {
    console.log(new Date()); 
}, 3000);
    
setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло'); }, 30000);
    
        
//4
function delayForSecond(callback) {
    setTimeout(function() {
    callback();
    }, 1000);
    }
    
    delayForSecond(function () {
    console.log('Привет, Глеб!');
    })

//5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(function () {
    sayHi('Глеб')});












