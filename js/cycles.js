// циклы
let num = 50;

do {
	console.log(num);
	num++;
} while (num < 55);


while (num <= 55) {
	console.log(num);
	num++;
}




for (let i = 1; i < 10; i++) {
	if (i === 6) {
		break;
		// continue;
	}
	console.log(i);
}