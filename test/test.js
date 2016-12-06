var chai = require('chai');
var expect = chai.expect;
var main = require('../main.js');
var testData = require('./morseTest.js');
var removeMorse = main.removeMorse,
    removeMorseTwo = main.removeMorseTwo;
describe('removeMorse', function() {



    it('should return a number', function () {
        expect(removeMorse('','')).to.be.a('number');
    });

    it('should return the correct number of unique sequences on small examples', function () {
        testData.smallMorseProblems.forEach(function (problem) {
            expect(removeMorse(problem.given, problem.remove)).to.equal(problem.answer);
        })
    });

    it('should run in under 10 seconds on the example', function () {

        var start = Date.now();
        removeMorse(testData.benchMarkMorse[0], testData.benchMarkMorse[1]);
        var time = Date.now() - start;
        console.log(time);
        expect(time).to.be.below(10000);
    });
});

describe('morseStepTwo', function () {

    it('should return the correct number of unique sequences ', function () {
        testData.twoDeletionProblems.forEach(function (problem) {
            expect(removeMorseTwo(problem.given, problem.remove1, problem.remove2)).to.equal(problem.answer);
        })
    });

    it('should run in under 60 seconds on the example', function () {

        var start = Date.now();
        var result = removeMorseTwo(testData.twoDeletionProblems[1].given,
            testData.twoDeletionProblems[1].remove1,
            testData.twoDeletionProblems[1].remove2);
        var time = Date.now() - start;
        console.log(time);
        expect(time).to.be.below(60000);
    });
});
