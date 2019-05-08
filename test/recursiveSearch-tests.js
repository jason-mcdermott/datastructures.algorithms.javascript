let assert = require('assert');
let search = require ('../algorithms/search/binarySearch');

let _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('recursive binarySearch', function() {
  describe('#recursiveSearch()', function() {
    it('should find the target 4', function() {
        let result = search.recursiveSearch(_numbers, 4);
        assert.equal(result, true);
    });
  });
});

describe('recursive binarySearch', function() {
    describe('#recursiveSearch()', function() {
      it('should find the target 10', function() {
          let result = search.recursiveSearch(_numbers, 10);
          assert.equal(result, true);
      });
    });
  });

describe('recursive binarySearch', function() {
    describe('#recursiveSearch()', function() {
        it('should not find the target 0', function() {
            let result = search.recursiveSearch(_numbers, 0);
            assert.equal(result, false);
        });
    });
});

describe('recursive binarySearch', function() {
    describe('#recursiveSearch()', function() {
        it('should not find the target 12', function() {
            let result = search.recursiveSearch(_numbers, 12);
            assert.equal(result, false);
        });
    });
});
