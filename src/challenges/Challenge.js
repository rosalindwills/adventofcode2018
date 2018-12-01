import PuzzleInput from '../util/PuzzleInput';

export default class Challenge {
	constructor(puzzleNumber) {
		this.puzzle = new PuzzleInput(puzzleNumber);
		this.result1 = null;
		this.result2 = null;
	}

	printResult() {
		console.log(`Part 1 result is ${this.result1}`);
		console.log(`Part 2 result is ${this.result2}`);
	}
}
