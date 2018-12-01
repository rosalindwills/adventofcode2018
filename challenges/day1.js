const util = require('../util')

var lines = util.readLines('./inputs/puzzle1.txt', handleLines);
var result1;
var result2;
var currentFrequency = null;
var frequencies = [];
handleLines(lines);

function handleLines(lines) {
	var processed = processLines(lines);
	while (!result2) {
		var loopResult = calculateResult(processed);
		if (!result1) {
			result1 = loopResult;
		}
	}
	console.log(`Part 1 result is ${result1}`);
	console.log(`Part 2 result is ${result2}`)
}

function processLines(lines) {
	var output = [];
	lines.forEach((element, index) => {
		var number = parseInt(element.match(/\d+$/), 10);
		if (element[0] === '-') {
			number *= -1;
		}
		output[index] = number;
	});
	return output;
}

function calculateResult(numbers) {
	numbers.forEach((element) => {
		if (isNaN(element) || result2) {
			return;
		}
		currentFrequency += element;
		if (!result2 && frequencies.includes(currentFrequency)) {
			result2 = currentFrequency;
		}
		frequencies.push(currentFrequency);
	});
	return currentFrequency;
}
