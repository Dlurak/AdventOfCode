import { expect, test } from 'bun:test';
import { filterOutNaN } from '@helper';

test('filterOutNaN', () => {
	expect(filterOutNaN([1, 2, NaN, 3, 4, NaN, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filterOutNaN([])).toEqual([]);
	expect(filterOutNaN([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filterOutNaN([NaN, NaN])).toEqual([]);
});
