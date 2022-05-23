//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel


window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');
	box.addEventListener('touchstart', (event) => {
		event.preventDefault();
		console.log('start');
		console.log(event.targetTouches);
	});

	box.addEventListener('touchmove', (event) => {
		event.preventDefault();
		console.log(event.targetTouches[0].pageX);
	});

	// box.addEventListener('touchend', (event) => {
	// 	event.preventDefault();
	// 	console.log('end');
	// });
});

// touches - это свойство выдает список всех пальцев
// которые сейчас взаимодействуют с экраном


//если нас интересуют все пальцы которые 
// взаимодействуют именно с этим элементом
//targetTouches



//changedTouches - список пальцев, которые учавствую в текущем событии