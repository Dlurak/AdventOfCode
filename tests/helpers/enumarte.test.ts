import { expect, test } from 'bun:test';
import { enumerate } from '@helper';

test('enumerate', () => {
	expect(enumerate([])).toEqual([]);
	expect(enumerate([1, 2, 3])).toEqual([
		[1, 0],
		[2, 1],
		[3, 2],
	]);
});
