var morseRemove = require('./src/morseRemove.js');
var morseStepTwo = require('./src/morseStepTwo.js');
var testData = require('./test/morseTest.js');

var removeMorse = morseRemove.removeMorse,
    indexMorse = morseRemove.indexMorse;
var removeMorseTwo = morseStepTwo.removeMorseTwo;
module.exports = {
    removeMorse: removeMorse,
    indexMorse: indexMorse,
    removeMorseTwo: removeMorseTwo
};

if (process.argv[4]){
    removeMorseTwo(process.argv[2], process.argv[3], process.argv[4]);
} else if (process.argv[3]) {
    removeMorse(process.argv[2], process.argv[3]);
}
