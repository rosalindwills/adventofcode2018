const fs = require('fs');

function readListOfStrings(filename) {
	var array = fs.readFileSync(filename).toString().split("\r\n");
	return array.filter(s => s);
}
function readListOfNumbers(filename) {
	var lines = readListOfStrings(filename);
	return parseListOfElementsAsNumbers(lines);
}
function readListOfStringLists(filename) {
	var lines = readListOfStrings(filename);
	var output = [];
	lines.forEach(element => {
		output.push(element.split(' '));
	});
	return output;
}
function readListOfNumberLists(filename) {
	var lines = readListOfStringLists(filename);
	var output = [];
	lines.forEach(line => output.push(parseListOfElementsAsNumbers(line)));
	return output;
}

function parseListOfElementsAsNumbers(list) {
	var output = [];
	list.forEach((element) => {
		var number = parseElementAsNumber(element);
		if (isNaN(number)) {
			return;
		}
		output.push(number);
	});
	return output;
}
function parseElementAsNumber(element) {
	var number = parseInt(element.match(/\d+$/), 10);
	if (element[0] === '-') {
		number *= -1;
	}
	return number;
}

module.exports = {
	readListOfStrings,
	readListOfNumbers,
	readListOfStringLists,
	readListOfNumberLists
};
