import { expect, test } from 'bun:test';
import { range, isInRange } from '@helper';

test('range', () => {
	expect(range(5)).toEqual([0, 1, 2, 3, 4]);
	expect(range(5, 3)).toEqual([3, 4, 5, 6, 7]);
});

test('isInRange', () => {
	expect(isInRange(1, 3, 5)).toBeTrue();
	expect(isInRange(1, 5, 5)).toBeTrue();
	expect(isInRange(5, 5, 5)).toBeTrue();
	expect(isInRange(1, 6, 5)).toBeFalse();
});
