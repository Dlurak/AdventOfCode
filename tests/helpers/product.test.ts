import { expect, test } from 'bun:test';
import { product } from '@helper';

test('product', () => {
	expect(product([1, 2, 2])).toBe(4);
	expect(product([0, 2, 2])).toBe(0);
	expect(product([1])).toBe(1);
	expect(product([])).toBe(NaN);
	expect(product([1, 1, 1])).toBe(1);
	expect(product([1, NaN, 1])).toBeNaN();
});
