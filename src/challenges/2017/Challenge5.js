import Challenge from '../Challenge';

export default class Challenge5 extends Challenge {
	constructor() {
		super('2017/puzzle5');
		this.numbers = this.puzzle.readAsListOfNumbers();
		this.result1 = 0;
		this.result2 = 0;
	}

	execute() {
		this.calculateResult1();
		this.calculateResult2();
	}

	calculateResult1() {
		const numbers = [...this.numbers];
		let index = 0;
		while (index <= numbers.length) {
			this.result1++;
			const currentNumber = numbers[index];
			numbers[index]++;
			index += currentNumber;
		}
		this.result1--;
	}

	calculateResult2() {
		const numbers = [...this.numbers];
		let index = 0;
		while (index <= numbers.length) {
			this.result2++;
			const currentNumber = numbers[index];
			if (currentNumber >= 3) {
				numbers[index]--;
			} else {
				numbers[index]++;
			}
			index += currentNumber;
		}
		this.result2--;
	}
}
