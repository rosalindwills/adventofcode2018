import { uniqBy } from 'lodash';

export default class Util {
	static parseListOfElementsAsNumbers(list) {
		const output = [];
		list.forEach((element) => {
			const number = Util.parseElementAsNumber(element);
			if (Number.isNaN(number)) {
				return;
			}
			output.push(number);
		});
		return output;
	}

	static parseElementAsNumber(element) {
		let number = parseInt(element.match(/\d+$/), 10);
		if (element[0] === '-') {
			number *= -1;
		}
		return number;
	}

	static getLargestAndSmallestNumberInList(list) {
		const result = {
			largest: Math.max(...list),
			smallest: Math.min(...list)
		};
		return result;
	}

	static getSumOfNumberArray(list) {
		return list.reduce((accumulator, currentValue) => accumulator + currentValue);
	}

	static containsDuplicates(list) {
		return uniqBy(list, item => JSON.stringify(item)).length !== list.length;
	}

	static containsDuplicate(list, value) {
		return (list.indexOf(value) === list.lastIndexOf(value));
	}

	static sortLettersInString(value) {
		return value.split('').sort().join('');
	}

	static getCountOfValues(list) {
		const counter = {};
		list.forEach((value) => {
			if (!counter[value]) {
				counter[value] = 1;
			} else {
				counter[value]++;
			}
		});
		return counter;
	}
}
