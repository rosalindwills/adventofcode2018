import Challenge from '../Challenge';
import Util from '../../util/Util';

export default class Challenge6 extends Challenge {
	constructor() {
		super('2017/puzzle6');
		this.banks = this.puzzle.readAsListOfNumberLists()[0];
		this.distributions = [];
	}

	execute() {
		this.calculateResult1();
		this.calculateResult2();
	}

	calculateResult1() {
		this.distributions.push([...this.banks]);
		this.result1 = this.performLoop();
	}

	calculateResult2() {
		this.distributions = [this.distributions.slice(-1)[0]];
		this.result2 = this.performLoop();
	}

	performLoop() {
		let steps = 0;
		while (!Util.containsDuplicates(this.distributions)) {
			steps++;
			let toBeDistributed = Util.getLargestAndSmallestNumberInList(this.banks).largest;
			let index = this.banks.indexOf(toBeDistributed);
			this.banks[index] = 0;
			while (toBeDistributed > 0) {
				toBeDistributed--;
				index++;
				if (index > this.banks.length - 1) {
					index = 0;
				}
				this.banks[index]++;
			}
			this.distributions.push([...this.banks]);
		}
		return steps;
	}
}
