import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function - full coverage tests', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'Test Case 1.1 Failed: 1 + 2 should be 3');
  assert.strictEqual(sum(0, 0), 0, 'Test Case 1.2 Failed: 0 + 0 should be 0');
  assert.strictEqual(sum(100, 200), 300, 'Test Case 1.3 Failed: 100 + 200 should be 300');
  assert.strictEqual(sum(0, 5), 5, 'Test Case 1.4 Failed: 0 + 5 should be 5');
  assert.strictEqual(sum(10, 0), 10, 'Test Case 1.5 Failed: 10 + 0 should be 10');
  assert.strictEqual(sum(0.5, 0.5), 1, 'Test Case 1.6 Failed: 0.5 + 0.5 should be 1');

  assert.strictEqual(sum(-1, 5), 0, 'Test Case 2.1 Failed: Negative input a, should return 0');
  assert.strictEqual(sum(5, -1), 0, 'Test Case 2.2 Failed: Negative input b, should return 0');
  assert.strictEqual(sum(-5, -10), 0, 'Test Case 2.3 Failed: Both inputs negative, should return 0');
  assert.strictEqual(sum(-0.1, 5), 0, 'Test Case 2.4 Failed: Negative float input a, should return 0');

  assert.strictEqual(sum('1', 2), 0, 'Test Case 3.1 Failed: String input a, should return 0');
  assert.strictEqual(sum(1, '2'), 0, 'Test Case 3.2 Failed: String input b, should return 0');
  assert.strictEqual(sum('1', '2'), 0, 'Test Case 3.3 Failed: Both inputs string, should return 0');
  assert.strictEqual(sum(null, 2), 0, 'Test Case 3.4 Failed: Null input a, should return 0');
  assert.strictEqual(sum(1, undefined), 0, 'Test Case 3.5 Failed: Undefined input b, should return 0');
  assert.strictEqual(sum({}, 2), 0, 'Test Case 3.6 Failed: Object input a, should return 0');
  assert.strictEqual(sum(1, []), 0, 'Test Case 3.7 Failed: Array input b, should return 0');
  assert.strictEqual(sum(true, 2), 0, 'Test Case 3.8 Failed: Boolean input a, should return 0');
  assert.strictEqual(sum(Symbol('foo'), 2), 0, 'Test Case 3.9 Failed: Symbol input a, should return 0');

  assert.strictEqual(Number.isNaN(sum(NaN, 2)), true, 'Test Case 4.1 Failed: NaN input a, should result in NaN');
  assert.strictEqual(Number.isNaN(sum(1, NaN)), true, 'Test Case 4.2 Failed: NaN input b, should result in NaN');
  assert.strictEqual(Number.isNaN(sum(NaN, NaN)), true, 'Test Case 4.3 Failed: Both inputs NaN, should result in NaN');
});
