import { expect, test } from 'bun:test';
import { pair } from '@helper';

test('pair', () => {
	expect(pair([1, 2, 3, 4, 5])).toEqual([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	]);
	expect(pair([])).toEqual([]);
	expect(pair([1, 2, 3])).toEqual([
		[1, 2],
		[2, 3],
	]);
	expect(pair(['a', 'b', 'c'])).toEqual([
		['a', 'b'],
		['b', 'c'],
	]);
});
