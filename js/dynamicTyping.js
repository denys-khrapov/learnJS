// to String
// 1) Первая команда - редко используется 
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2) Вторая команда - конкатенация

console.log(typeof (null + ''));


const num = 7;

console.log('https://google.com/catalog/' + num);

const fontSize = 25 + 'px';

// to Number

// 1) редко используют
console.log(typeof (Number('4)')));


// 2) Унарный плюс

console.log(typeof (+'4'));

// 3) методы у чисел

console.log(typeof (parseInt('15px', 10)));

let answer = +prompt('hello', '');

//To boolean

// 0, '', null, undefined, NaN;  - будет превращаться в false
// 1) Первый способ, нативный
let switcher = null;

if (switcher) {
	console.log('Working...');
}

switcher = 1;

if (switcher) {
	console.log('Working!');
}
//2) Второй способ - редкий способ ( пользуются в основном первым)


console.log(typeof (Boolean('4)')));

//3) Третий способ

console.log(typeof (!!'hello'));