const fs = require('fs');

// adapted from https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
function readLines(filename) {
	var array = fs.readFileSync(filename).toString().split("\r\n");
	return array;
}

module.exports = {
	readLines
};
