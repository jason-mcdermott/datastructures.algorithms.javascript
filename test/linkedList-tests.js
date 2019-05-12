let assert = require('assert');
let LinkedList = require ('../data-structures/linkedList');

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
let nodes = list.traverse();

describe('LinkedList', function() {
    describe('#LinkedList length', function() {
      it('length of node list should be 4', function() {
          assert.equal(nodes.length, 4);
      });
    });
});

describe('LinkedList traversal', function() {
    describe('#traverse()', function() {
      it('first node value should be 1', function() {
          assert.equal(nodes[0], 1);
      });
    });
});

describe('LinkedList traversal', function() {
    describe('#traverse()', function() {
      it('second node value should be 2', function() {
          assert.equal(nodes[1], 2);
      });
    });
});

describe('LinkedList traversal', function() {
    describe('#traverse()', function() {
      it('third node value should be 3', function() {
          assert.equal(nodes[2], 3);
      });
    });
});

describe('LinkedList traversal', function() {
    describe('#traverse()', function() {
      it('last node value should be 4', function() {
          assert.equal(nodes[3], 4);
      });
    });
});