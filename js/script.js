/* jshint -W097 */
'use strict';

//task-1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = +prompt('На сколько оцените его?', '');
// const d = prompt('Один из последних просмотренных фильмов?', '');
// const c = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies.a = b;
// personalMovieDB.movies.d = c;




//task-2

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = +prompt('На сколько оцените его?', '');

	if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}

}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	alert("Вы киноман");
} else {
	alert('Произошла ошибка');
}











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


// const result = confirm("hello");

// console.log(result);

// const answer = +prompt("Вам есть 18?", "25");

// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Ваш возраст?', '');


// console.log(typeof (answers));
// console.log(typeof (null));



// использование интерполяции 

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);


// const user = 'Денис';

// const result = prompt('Ваше имя?', '');

// alert(`Привет ${result}`);


// инкримент и дикримент 

// let incr = 10;
// let decr = 10;



// console.log(incr++);
// console.log(--decr);


// const isChecked = true;
// const isClose = false;

// console.log(isChecked || isClose);


// Условия 

// if (4 == 9) {
// 	console.log('ok');
// } else {
// 	console.log('not ok');
// }


// const num = 50;

// if (num < 49) {
// 	console.log('переменная меньше!');
// } else if (num > 100) {
// 	console.log('переменная больше!');
// } else {
// 	console.log('Все ок!');
// }

//тернарный оператор

// (num === 50) ? console.log('Все окей!'): console.log('Error');


//switch
// const number = 50;
// switch (number) {
// 	case 49:
// 		console.log('Неверно');
// 		break;
// 	case 51:
// 		console.log('Неверно');
// 		break;
// 	case 54:
// 		console.log('Верно');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }


// циклы
// let num = 50;

// do {
// 	console.log(num);
// 	num++;
// } while (num < 55);


// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }




// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		break;
// continue;
// 	}
// 	console.log(i);
// }