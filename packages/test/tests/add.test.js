import add from 'add/add.js';

import {test, expect} from 'vitest';

test('add', () => {
  expect(add(1, 1)).toEqual(2);
});