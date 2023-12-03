import { expect, test, describe } from 'bun:test';
import { filterOutNaN, filterOut } from '@helper';

test('filterOutNaN', () => {
	expect(filterOutNaN([1, 2, NaN, 3, 4, NaN, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filterOutNaN([])).toEqual([]);
	expect(filterOutNaN([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(filterOutNaN([NaN, NaN])).toEqual([]);
});

describe('filterOut function', () => {
	test('should filter out a specific number from an array of numbers', () => {
		const originalArray = [1, 2, 3, 4, 3, 5];
		const filteredArray = filterOut(originalArray, 3);
		expect(filteredArray).toEqual([1, 2, 4, 5]);
	});

	test('should filter out a specific string from an array of strings', () => {
		const words = ['apple', 'orange', 'banana', 'apple'];
		const filteredWords = filterOut(words, 'apple');
		expect(filteredWords).toEqual(['orange', 'banana']);
	});

	test('should not modify the original array', () => {
		const originalArray = [1, 2, 3, 4, 3, 5];
		filterOut(originalArray, 3);
		// Ensure the original array is not modified
		expect(originalArray).toEqual([1, 2, 3, 4, 3, 5]);
	});

	test('should handle empty arrays correctly', () => {
		const emptyArray: number[] = [];
		const filteredEmptyArray = filterOut(emptyArray, 42);
		expect(filteredEmptyArray).toEqual([]);
	});

	test('should handle arrays without the specified value correctly', () => {
		const originalArray = [1, 2, 3, 4, 5];
		const filteredArray = filterOut(originalArray, 42);
		// Ensure the array remains unchanged
		expect(filteredArray).toEqual([1, 2, 3, 4, 5]);
	});
});
