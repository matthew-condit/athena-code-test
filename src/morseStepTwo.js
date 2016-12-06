var morseRemove = require('./morseRemove.js');

self = {
    removeMorseTwo: function (originalString, removeString1, removeString2) {
        if(originalString === '' || removeString1 === '' || removeString2 === '') return 0;
        var indexMatrix = morseRemove.indexMorse(originalString, removeString1);
        var deletionPaths = morseRemove.computeDeletionPaths(indexMatrix,[],[], -1, indexMatrix.length);
        var uniqueResults1 = morseRemove.calculateUnique(originalString, deletionPaths);
        var finalUniques = {};
        uniqueResults1.forEach(function (reducedOriginal) {
          var reducedIndexMatrix = morseRemove.indexMorse(reducedOriginal, removeString2);
          var reducedDeletionPaths = morseRemove.computeDeletionPaths(reducedIndexMatrix, [], [], -1, reducedIndexMatrix.length);
          finalUniques = self.calculateUnique(reducedOriginal, reducedDeletionPaths, finalUniques);
         });
        console.log(Object.keys(finalUniques).length);
        return Object.keys(finalUniques).length;
    },

    calculateUnique: function (string, deletionPaths, totalDictionary) {
        deletionPaths.forEach(function (path) {
           var resultStringArray = [];
            for (var i = 0; i < string.length; i++) {
                if (path.indexOf(i) === -1) {
                    resultStringArray.push(string[i]);
                };
            }
            var resultString = resultStringArray.join('');
            totalDictionary[resultString] =1;
        });
        return totalDictionary;
    }
};

module.exports = self;