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


//2 задан вопрос, не выводит массив
function isPositive(num) {
    if (num > 0) {
        return num;
    }
    }

function isMale(name, gender) {
    if (gender === 'male') {
        return name + gender;
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

//3 сделать, чтобы секунды менялись
let currentDate = new Date(); 
let interval = setInterval(() => {
    console.log(currentDate); 
}, 3000);
    
setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло'); }, 30000);
    
        
//4


    















