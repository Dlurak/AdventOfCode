import { sort } from '@helper';
import { describe, it, expect } from 'bun:test';

describe('sort', () => {
	it('sorts an array of numbers in ascending order', () => {
		const numbers = [10, 5, 20, 15];
		expect(sort(numbers, (num) => num)).toEqual([5, 10, 15, 20]);
	});

	it('sorts an array of strings in alphabetical order', () => {
		expect(sort(['banana', 'apple', 'cherry', 'date'], (str) => str)).toEqual([
			'apple',
			'banana',
			'cherry',
			'date',
		]);
	});

	it('sorts an array of objects by a numeric property', () => {
		expect(
			sort(
				[
					{ id: 3, name: 'Charlie' },
					{ id: 1, name: 'Alice' },
					{ id: 2, name: 'Bob' },
				],
				(item) => item.id,
			),
		).toEqual([
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
			{ id: 3, name: 'Charlie' },
		]);
	});

	it('sorts an array of objects by a string property', () => {
		expect(
			sort(
				[
					{ id: 1, name: 'Charlie' },
					{ id: 2, name: 'Alice' },
					{ id: 3, name: 'Bob' },
				],
				(item) => item.name,
			),
		).toEqual([
			{ id: 2, name: 'Alice' },
			{ id: 3, name: 'Bob' },
			{ id: 1, name: 'Charlie' },
		]);
	});

	it('handles an empty array', () => {
		expect(sort([], (num) => num)).toEqual([]);
	});

	it("doesn't mutate the original array", () => {
		const original = [3, 1, 2];
		const sorted = sort(original, (num) => num);
		expect(sorted).not.toBe(original);
		expect(original).toEqual([3, 1, 2]);
	});
});
