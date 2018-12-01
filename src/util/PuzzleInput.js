import fs from 'fs';
import Util from './Util';

export default class PuzzleInput {
	constructor(filename) {
		this.path = `${process.cwd()}/src/inputs/${filename}.txt`;
	}

	readAsListOfStrings() {
		const array = fs.readFileSync(this.path).toString().split('\n');
		return array.filter(s => s);
	}

	readAsListOfNumbers() {
		const lines = this.readAsListOfStrings();
		return Util.parseListOfElementsAsNumbers(lines);
	}

	readAsListOfWordLists() {
		const lines = this.readAsListOfStrings();
		const output = [];
		lines.forEach(element => output.push(element.split(/\s+/)));
		return output;
	}

	readAsListOfNumberLists() {
		const lines = this.readAsListOfWordLists();
		const output = [];
		lines.forEach(line => output.push(Util.parseListOfElementsAsNumbers(line)));
		return output;
	}

	readAsListOfChars() {
		const array = fs.readFileSync(this.path).toString().split('');
		return array.filter(s => s);
	}

	readAsListOfDigits() {
		const values = this.readAsListOfChars();
		return Util.parseListOfElementsAsNumbers(values);
	}
}
