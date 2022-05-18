/* jshint -W097 */
'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = +prompt('На сколько оцените его?', '');
const d = prompt('Один из последних просмотренных фильмов?', '');
const c = +prompt('На сколько оцените его?', '');

personalMovieDB.movies.a = b;
personalMovieDB.movies.d = c;


console.log(personalMovieDB);


















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