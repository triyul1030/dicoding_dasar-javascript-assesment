import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function tests', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'Test Case 1 Failed: 1 + 2 should be 3');

  assert.strictEqual(sum(5, -3), 2, 'Test Case 2 Failed: 5 + (-3) should be 2');

  assert.strictEqual(sum(-2, -3), -5, 'Test Case 3 Failed: (-2) + (-3) should be -5');

  assert.strictEqual(sum(10, 0), 10, 'Test Case 4 Failed: 10 + 0 should be 10');
  assert.strictEqual(sum(0, 7), 7, 'Test Case 5 Failed: 0 + 7 should be 7');
  assert.strictEqual(sum(0, 0), 0, 'Test Case 6 Failed: 0 + 0 should be 0');
});
