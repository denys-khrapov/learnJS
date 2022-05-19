// Условия 

if (4 == 9) {
	console.log('ok');
} else {
	console.log('not ok');
}


const num = 50;

if (num < 49) {
	console.log('переменная меньше!');
} else if (num > 100) {
	console.log('переменная больше!');
} else {
	console.log('Все ок!');
}

// тернарный оператор

(num === 50) ? console.log('Все окей!'): console.log('Error');


// switch
const number = 50;
switch (number) {
	case 49:
		console.log('Неверно');
		break;
	case 51:
		console.log('Неверно');
		break;
	case 54:
		console.log('Верно');
		break;
	default:
		console.log('Не в этот раз');
		break;
}