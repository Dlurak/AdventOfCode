import { expect, test } from 'bun:test';
import { sum } from '@helper';

test('sum', () => {
	expect(sum([1, 2, 2])).toBe(5);
	expect(sum([1])).toBe(1);
	expect(sum([])).toBe(0);
	expect(sum([1, 1, 1])).toBe(3);
	expect(sum([1, NaN, 1])).toBeNaN();
});
