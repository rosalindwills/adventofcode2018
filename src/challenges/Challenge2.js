import { zip, unzip, remove } from 'lodash';
import Challenge from './Challenge';
import Util from '../util/Util';

export default class Challenge2 extends Challenge {
	constructor() {
		super('puzzle2');
		this.input = this.puzzle.readAsListOfStrings();
	}

	execute() {
		this.calculateResult1();
		this.calculateResult2();
	}

	calculateResult1() {
		const counters = [];
		this.input.forEach((row) => {
			const chars = row.split('');
			const counter = Util.getCountOfValues(chars);
			counters.push(counter);
		});
		const hasDuplicate = counters.filter(c => Object.values(c).includes(2)).length;
		const hasTriplicate = counters.filter(c => Object.values(c).includes(3)).length;
		this.result1 = hasDuplicate * hasTriplicate;
	}

	calculateResult2() {
		this.input.forEach((row, index) => {
			this.input.forEach((row2, index2) => {
				if (index2 === index || this.result2) {
					return;
				}
				const zipped = zip(row.split(''), row2.split(''));
				const cleaned = remove(zipped, i => i[0] === i[1]);
				if (cleaned.length === row.length - 1) {
					this.result2 = unzip(cleaned)[0].join('');
				}
			});
		});
	}
}
