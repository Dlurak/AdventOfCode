import { expect, it, describe } from 'bun:test';
import { transpose } from '@helper';

describe('transpose', () => {
	it('should transpose a matrix correctly', () => {
		const originalArray = [
			[7, 15, 30],
			[9, 40, 200],
		];
		const transposedArray = transpose(originalArray);
		const expectedTransposedArray = [
			[7, 9],
			[15, 40],
			[30, 200],
		];
		expect(transposedArray).toEqual(expectedTransposedArray);
	});

	it('should transpose another matrix correctly', () => {
		const anotherArray = [
			[1, 2, 3],
			[4, 5, 6],
		];
		const anotherTransposedArray = transpose(anotherArray);
		const expectedAnotherTransposedArray = [
			[1, 4],
			[2, 5],
			[3, 6],
		];
		expect(anotherTransposedArray).toEqual(expectedAnotherTransposedArray);
	});
});
