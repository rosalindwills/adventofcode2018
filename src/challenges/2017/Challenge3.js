import Challenge from '../Challenge';

export default class Challenge2 extends Challenge {
	constructor() {
		super('2017/puzzle3');
		this.input = this.puzzle.readAsListOfNumbers()[0];
	}

	execute() {
		this.determineCoordinatePosition();
	}

	determineCoordinatePosition() {
		let loopWidth = 3;
		let loopMax = 1;
		while (loopMax < this.input) {
			loopMax += (loopWidth * loopWidth - 1);
			console.log(`Loop max for loopcount ${loopWidth - 2} is ${loopMax}`);
			loopWidth++;
		}
		console.log(loopWidth);
		console.log(loopMax);
		const perimeter = ((loopWidth * 2) + ((loopWidth - 1) * 2));
		console.log(perimeter);
	}
}
