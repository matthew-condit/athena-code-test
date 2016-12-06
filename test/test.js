var chai = require('chai');
var expect = chai.expect;
var main = require('../main.js');
var testData = require('./morseTest.js');
var removeMorse = main.removeMorse,
    indexMorse = main.indexMorse,
    getAllIndices = main.getAllIndices;
describe('removeMorse', function() {



    it('should return a number', function () {
        expect(removeMorse('','')).to.be.a('number');
    });

    it('should return the correct number of unique sequences on small examples', function () {
        testData.smallMorseProblems.forEach(function (problem) {
            console.log('Small Morse Test');
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
//
// describe('indexMorse', function () {
//     it('should return an array of arrays', function () {
//         expect(indexMorse('','')).to.be.a('[][]')
//     })
// });
