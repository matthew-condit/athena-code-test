
var self = {

    removeMorse:function(givenString, removeString) {
        //Main Function
        if (givenString === '') return 0;
        var indexMatrix = self.indexMorse(givenString, removeString);
        var deletionPaths = self.computeDeletionPaths(indexMatrix,[],[], -1, indexMatrix.length);
        var uniqueResults = self.calculateUnique(givenString, deletionPaths);
        return uniqueResults.length;
    },

    computeDeletionPaths: function (indexMatrix, paths, currentPath, currentIndex, originalLength) {
        if (currentPath.length === originalLength) {
            paths.push(currentPath);
            return;
        }
        indexMatrix[0].forEach(function (index) {
            if (index > currentIndex) {
                var pathCopy = currentPath.slice();
                pathCopy.push(index);
                self.computeDeletionPaths(indexMatrix.slice(1), paths, pathCopy, index, originalLength);
            }
        });
        return paths;
    },

    calculateUnique: function (given, deletionPaths) {
        var uniqueResults = [];
        deletionPaths.forEach(function (path) {
            var resultStringArray = [];
            for(var i = 0; i < given.length; i++) {
                if (path.indexOf(i) === -1) {
                    resultStringArray.push(given[i]);
                }
            };
            var resultString = resultStringArray.join('');
            if (uniqueResults.indexOf(resultString) === -1) {
                uniqueResults.push(resultString);
            }
        });
        return uniqueResults;
    },

    indexMorse: function(given, remove) {
        //Returns an
        var IndexDictionary = self.getMorseObject(given);
        var givenStringMap = [];
        for (var i = 0; i<remove.length; i++) {
            givenStringMap.push(IndexDictionary[remove[i]]);
        };
        return givenStringMap;
    },

    getMorseObject: function(string) {
        //This gets an object with the indices of the all of the 3 different morse symbols
        var IndexObject = {
            '*': [],
            '-':[],
            '_':[]
        };
        string.split('').forEach(function (charAt, index) {
            IndexObject[charAt].push(index);
        });
        return IndexObject;
    },
};

module.exports = self;

