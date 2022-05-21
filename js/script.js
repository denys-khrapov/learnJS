// /* jshint -W097 */
// 'use strict';

// var number = 5;

// const leftBorderWidth = 1;
// console.log(number);

// let obj = {
// 	name: "Denys",
// 	age: 25,
// 	isMarried: true
// };

// console.log(obj.age);


// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
// 	[]
// ];

// console.log(arr[0]);


// // const result = confirm("hello");

// // console.log(result);

// const answer = +prompt("Вам есть 18?", "25");

// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Ваш возраст?', '');


// console.log(typeof (answers));
// console.log(typeof (null));



// // использование интерполяции 

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);


// const user = 'Денис';

// const result = prompt('Ваше имя?', '');

// alert(`Привет ${result}`);


// // инкримент и дикримент 

// let incr = 10;
// let decr = 10;



// console.log(incr++);
// console.log(--decr);


// const isChecked = true;
// const isClose = false;

// console.log(isChecked || isClose);

function greeting(name) {
	console.log('Hello ' + name);
}

function processUserInput(callback) {
	var name = 'denis';
	callback(name);
}

processUserInput(greeting);