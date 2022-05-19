//task-2

// цикл for

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


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

// цикл while
let i = 0;

while (i < 2) {
	i++;
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = +prompt('На сколько оцените его?', '');

	if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}

}
console.log(personalMovieDB);

// цикл do while

// let i = 0;

do {
	i++;
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = +prompt('На сколько оцените его?', '');

	if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}

} while (i < 2);

console.log(personalMovieDB);