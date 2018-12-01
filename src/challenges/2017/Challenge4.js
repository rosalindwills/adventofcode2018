import Challenge from '../Challenge';
import Util from '../../util/Util';

export default class Challenge4 extends Challenge {
	constructor() {
		super('2017/puzzle4');
		this.passphrases = this.puzzle.readAsListOfWordLists();
		this.result1 = 0;
		this.result2 = 0;
	}

	execute() {
		this.passphrases.forEach((row) => {
			if (!Util.containsDuplicates(row)) {
				this.result1++;
			}
			const alphabetizedWords = [];
			row.forEach((word) => {
				alphabetizedWords.push(Util.sortLettersInString(word));
			});
			if (!Util.containsDuplicates(alphabetizedWords)) {
				this.result2++;
			}
		});
	}
}
