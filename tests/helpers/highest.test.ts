import { describe, expect, it } from 'bun:test';
import { highestBy } from '@helper';

describe('highestBy', () => {
	it('returns the element with the highest value along with the value and its index', () => {
		const result = highestBy(
			[{ score: 5 }, { score: 10 }, { score: 7 }],
			(item) => item.score,
		);
		expect(result).toEqual([{ score: 10 }, 10, 1]);
	});

	it('returns null for an empty array', () => {
		const result = highestBy([], (item) => item);
		expect(result).toBeNull();
	});

	it('should work with arrays of numbers', () => {
		const result = highestBy([1, 5, 3, 9, 2], (num) => num);
		expect(result).toEqual([9, 9, 3]);
	});

	it('work with custom numerical functions', () => {
		const items = [{ a: 1 }, { a: -5 }, { a: 20 }];
		const result = highestBy(items, (item) => item.a * 2);
		expect(result).toEqual([{ a: 20 }, 40, 2]);
	});
});
