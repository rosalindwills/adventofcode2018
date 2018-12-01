import Challenge from '../Challenge';
import Util from '../../util/Util';

export default class Challenge2 extends Challenge {
	constructor() {
		super('2017/puzzle2');
		this.numbers = this.puzzle.readAsListOfNumberLists();
		this.result1 = 0;
		this.result2 = 0;
		this.differences = [];
		this.divisions = [];
	}

	execute() {
		this.numbers.forEach((row) => {
			const data = Util.getLargestAndSmallestNumberInList(row);
			this.differences.push(data.largest - data.smallest);
			row.forEach((item, index) => {
				const divisor = row.find((item2, index2) => item % item2 === 0 && index !== index2);
				if (divisor) {
					this.divisions.push(item / divisor);
				}
			});
		});
		this.result1 = Util.getSumOfNumberArray(this.differences);
		this.result2 = Util.getSumOfNumberArray(this.divisions);
	}
}
