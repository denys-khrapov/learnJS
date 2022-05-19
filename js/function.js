//Функции
let num = 20;

function showFirstMessage(text) {
	console.log(text);
	num = 10;

}
showFirstMessage('hello world!');
console.log(num);



function calc(a, b) {
	return (a + b);
}

console.log(calc(5, 13));
console.log(calc(10, 13));



function ret() {
	let num = 2;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
	console.log("hello");
};

logger();



const calcs = (a, b) => {
	return a + b;
};


// методы и свойства строк и чисел


const str = 'teSt';
const arr = [1, 2, 10];


// методы изменения регистра

console.log(str.toUpperCase());
console.log(str.toLowerCase());