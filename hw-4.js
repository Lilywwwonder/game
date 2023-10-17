//1
let i = 0;

do {
    console.log('Привет');
        i++;
} while (i < 2);

/* второй вариант
let i = 0;

while (i < 2) {
	console.log('Привет');
	i++;
}
*/

//2
let b = 1;

while (b < 6) {
	console.log(b);
	b++;
}


//3
let d = 7;

while (d < 23) {
	console.log(d);
	d++;
}

//4
let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for (let key in obj) {
    if (obj[key]) {
    console.log(`${key} - зарабатывает ${obj[key]}`)
    }
}

//5 while
let n = 1000;
let num = 0;

while (n >= 50) {
n /= 2;
num++;
}

console.log(n);
console.log(num);

/* вариант do while
let num = 0;
let n = 1000;

do {
  n/=2;
  num++;
} while (n >= 50);

console.log(num);
console.log(n);
*/

//6
let friday = 7;

for (let all = 1; all <= 31; all++) {
    if (all % 7 == 0) {
    console.log("Сегодня пятница, " + all + " -е число. Необходимо подготовить отчет.");
    }
}