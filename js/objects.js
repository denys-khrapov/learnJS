const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('hello world!');
	}
};

options.makeTest();

const {
	border,
	bg
} = options.colors;
console.log(bg);

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);


// let counter = 0;

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);  



const Denis = {
	growth: 189,
	weight: 70,
	eyes: 23
};




function result() {
	if (typeof (Denis.eyes) === 'string') {
		console.log('Done!');
	} else if (typeof (Denis.eyes) === 'number') {
		console.log('Error!');
	} else {
		console.log('Fuck Putin!');
	}
}

result();
console.log(typeof (Denis.eyes));