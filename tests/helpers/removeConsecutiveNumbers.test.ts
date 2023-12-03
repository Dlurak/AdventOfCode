import { test, expect, describe } from 'bun:test';
import { removeConsecutiveNumbers } from '@helper';

describe('removeConsecutiveNumbers', () => {
	test('removes consecutive numbers from an array', () => {
		const inputArray = [1, 2, 3, 5, 6, 8, 9];
		const resultArray = removeConsecutiveNumbers(inputArray);
		expect(resultArray).toEqual([1, 5, 8]);
	});

	test('handles an empty array', () => {
		const inputArray: number[] = [];
		const resultArray = removeConsecutiveNumbers(inputArray);
		expect(resultArray).toEqual([]);
	});

	test('handles an array with no consecutive numbers', () => {
		const inputArray = [1, 4, 7, 9];
		const resultArray = removeConsecutiveNumbers(inputArray);
		expect(resultArray).toEqual([1, 4, 7, 9]);
	});

	test('throws an error for non-numeric input', () => {
		const invalidInput: any = 'not an array';
		expect(() => removeConsecutiveNumbers(invalidInput)).toThrow(TypeError);
	});
});
