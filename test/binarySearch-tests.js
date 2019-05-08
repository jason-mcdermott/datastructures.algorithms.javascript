let assert = require('assert');
let search = require ('../algorithms/search/binarySearch');

let _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('iterative binarySearch', function() {
  describe('#iterativeSearch()', function() {
    it('should find the target 4', function() {
        let result = search.iterativeSearch(_numbers, 4);
        assert.equal(result, true);
    });
  });
});

describe('iterative binarySearch', function() {
    describe('#iterativeSearch()', function() {
      it('should find the target 10', function() {
          let result = search.iterativeSearch(_numbers, 10);
          assert.equal(result, true);
      });
    });
  });

describe('iterative binarySearch', function() {
    describe('#iterativeSearch()', function() {
        it('should not find the target 0', function() {
            let result = search.iterativeSearch(_numbers, 0);
            assert.equal(result, false);
        });
    });
});

describe('iterative binarySearch', function() {
    describe('#iterativeSearch()', function() {
        it('should not find the target 12', function() {
            let result = search.iterativeSearch(_numbers, 12);
            assert.equal(result, false);
        });
    });
});
