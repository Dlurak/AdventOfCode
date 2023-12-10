import { describe, it, expect } from 'bun:test';
import { newMatrix } from '@helper';

describe('newMatrix function', () => {
	it('creates a matrix with the correct size and fill value', () => {
		const size = { rows: 3, cols: 4 };
		const fillValue = 'X';
		const result = newMatrix(size, fillValue);

		// Check if the result is a 3x4 matrix filled with 'X'
		expect(result).toEqual([
			['X', 'X', 'X', 'X'],
			['X', 'X', 'X', 'X'],
			['X', 'X', 'X', 'X'],
		]);
	});

	it('creates a matrix filled with zeros if the fill value is 0', () => {
		const size = { rows: 2, cols: 2 };
		const fillValue = 0;
		const result = newMatrix(size, fillValue);

		// Check if the result is a 2x2 matrix filled with zeros
		expect(result).toEqual([
			[0, 0],
			[0, 0],
		]);
	});

	it('creates an empty matrix if size has zero rows or zero columns', () => {
		const sizeWithZeroRows = { rows: 0, cols: 3 };
		const sizeWithZeroCols = { rows: 4, cols: 0 };
		const fillValue = 'A';

		const resultWithZeroRows = newMatrix(sizeWithZeroRows, fillValue);
		const resultWithZeroCols = newMatrix(sizeWithZeroCols, fillValue);

		// Check if the result is an empty matrix in both cases
		expect(resultWithZeroRows).toEqual([]);
		expect(resultWithZeroCols).toEqual([[], [], [], []]);
	});
});
