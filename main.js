var morseRemove = require('./src/morseRemove.js');
var testData = require('./test/morseTest.js');

var removeMorse = morseRemove.removeMorse,
    indexMorse = morseRemove.indexMorse;
module.exports = {
    removeMorse: removeMorse,
    indexMorse: indexMorse,
};

removeMorse(testData.smallMorseProblems[0].given, testData.smallMorseProblems[0].remove);

