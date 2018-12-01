const util = require('./util');


const output = util.readListOfStrings('./inputs/mock/listOfStrings.txt');
console.log(output);
const output2 = util.readListOfNumbers('./inputs/mock/listOfNumbers.txt');
console.log(output2);
const output3 = util.readListOfStringLists('./inputs/mock/listOfStringLists.txt');
console.log(output3);
const output4 = util.readListOfNumberLists('./inputs/mock/listOfNumberLists.txt');
console.log(output4);
