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
}
