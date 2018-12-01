import Challenge from './Challenge';

export default class Challenge1 extends Challenge {
	constructor() {
		super('puzzle1');
		this.numbers = this.puzzle.readAsListOfNumbers();
		this.currentFrequency = null;
		this.frequencies = [];
	}

	execute() {
		while (!(this.result1 && this.result2)) {
			const loopResult = this.calculateResult();
			this.result1 = this.result1 || loopResult;
		}
	}

	calculateResult() {
		this.numbers.forEach((element) => {
			this.currentFrequency += element;
			if (!this.result2 && this.frequencies.includes(this.currentFrequency)) {
				this.result2 = this.currentFrequency;
			}
			this.frequencies.push(this.currentFrequency);
		});
		return this.currentFrequency;
	}
}
