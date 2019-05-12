let assert = require('assert');
let mergeSort = require('../algorithms/sort/mergeSort');

let numbers = [3, 5, 2, 9, 10, 8, 1, 4, 6, 7];
let sorted = mergeSort(numbers);

describe('mergeSort', function() {
    describe('#mergeSort()', function() {
        it('sorted list should have 1 at index 0', function() {
            assert.equal(1, sorted[0]);
        });
    });
});

describe('mergeSort', function() {
    describe('#mergeSort()', function() {
        it('sorted list should have 2 at index 1', function() {
            assert.equal(2, sorted[1]);
        });
    });
});

describe('mergeSort', function() {
    describe('#mergeSort()', function() {
        it('sorted list have 5 at index 4', function() {
            assert.equal(5, sorted[4]);
        });
    });
});

describe('mergeSort', function() {
    describe('#mergeSort()', function() {
        it('sorted list have 10 at index 9', function() {
            assert.equal(10, sorted[9]);
        });
    });
});