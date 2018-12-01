const util = require('../util')

var numbers = util.readListOfNumbers('./inputs/puzzle1.txt');
var result1;
var result2;
var currentFrequency = null;
var frequencies = [];

while (!(result1 && result2)) {
	var loopResult = calculateResult(numbers);
	result1 = result1 || loopResult;
}
console.log(`Part 1 result is ${result1}`);
console.log(`Part 2 result is ${result2}`)

function calculateResult(numbers) {
	numbers.forEach((element) => {
		currentFrequency += element;
		if (!result2 && frequencies.includes(currentFrequency)) {
			result2 = currentFrequency;
		}
		frequencies.push(currentFrequency);
	});
	return currentFrequency;
}
