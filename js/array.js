//массивы и методы 



const arr = [13, 12, 1, 119, 121];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });



// arr.pop();
// arr.push(10);

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// for (let i in arr) {
// 	console.log(i);
// }

// for (let value of arr) {
// 	console.log(value);
// }


// const str = prompt('', '');

// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));