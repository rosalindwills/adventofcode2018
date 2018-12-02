import Challenge from './Challenge';

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
		let hasDuplicate = 0;
		let hasTriplicate = 0;
		this.input.forEach((row) => {
			const counter = {};
			const chars = row.split('');
			chars.forEach((letter) => {
				if (!counter[letter]) {
					counter[letter] = 1;
				} else {
					counter[letter]++;
				}
			});
			if (Object.values(counter).includes(2)) {
				hasDuplicate++;
			}
			if (Object.values(counter).includes(3)) {
				hasTriplicate++;
			}
		});
		this.result1 = hasDuplicate * hasTriplicate;
	}

	calculateResult2() {
		this.input.forEach((row, index) => {
			const chars1 = row.split('');
			this.input.forEach((row2, index2) => {
				if (index2 === index || this.result2) {
					return;
				}
				const chars2 = row2.split('');
				let notInCommon = 0;
				let matchIndex = 0;
				chars1.forEach((_, charIndex) => {
					if (chars2[charIndex] !== chars1[charIndex]) {
						notInCommon++;
						matchIndex = charIndex;
					}
				});
				if (notInCommon === 1) {
					this.result2 = row.slice(0, matchIndex) + row.slice(matchIndex + 1);
				}
			});
		});
	}
}
