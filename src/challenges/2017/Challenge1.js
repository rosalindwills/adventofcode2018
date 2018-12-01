import Challenge from '../Challenge';

export default class Challenge1 extends Challenge {
	constructor() {
		super('2017/puzzle1');
		this.numbers = this.puzzle.readAsListOfDigits();
		this.result1 = 0;
		this.result2 = 0;
	}

	execute() {
		const result2ComparatorDiff = this.numbers.length / 2;
		this.numbers.forEach((n, index) => {
			let comparator1 = index + 1;
			let comparator2 = index + result2ComparatorDiff;
			if (comparator1 > this.numbers.length - 1) {
				comparator1 = 0;
			}
			if (comparator2 > this.numbers.length - 1) {
				comparator2 -= this.numbers.length;
			}
			if (n === this.numbers[comparator1]) {
				this.result1 += n;
			}
			if (n === this.numbers[comparator2]) {
				this.result2 += n;
			}
		});
	}
}
