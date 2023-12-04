import { expect, it, describe } from 'bun:test';
import { findDuplicates } from '@helper';

describe('findDuplicates', () => {
	it('should find duplicates in arrays of numbers', () => {
		const list1 = [1, 2, 3, 4, 5];
		const list2 = [3, 4, 5, 6, 7];
		const result = findDuplicates(list1, list2);
		expect(result).toEqual([3, 4, 5]);
	});

	it('should find duplicates in arrays of strings', () => {
		const words1 = ['apple', 'banana', 'orange'];
		const words2 = ['orange', 'kiwi', 'banana'];
		const resultWords = findDuplicates(words1, words2);
		expect(resultWords).toEqual(['banana', 'orange']);
	});

	it('should handle empty arrays', () => {
		const emptyArray1: number[] = [];
		const emptyArray2: number[] = [];
		const resultEmpty = findDuplicates(emptyArray1, emptyArray2);
		expect(resultEmpty).toEqual([]);
	});
});
