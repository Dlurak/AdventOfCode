import { describe, expect, it } from 'bun:test';
import { findItemCoordinates } from '@helper';

// Example matrix for testing
const matrix = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];

describe('findItemCoordinates', () => {
	it('should find the coordinates of an existing item', () => {
		const targetItem = 'e';
		const coordinates = findItemCoordinates(matrix, targetItem);
		expect(coordinates).toEqual({ row: 1, col: 1 });
	});

	it('should return null for a non-existing item', () => {
		const targetItem = 'x';
		const coordinates = findItemCoordinates(matrix, targetItem);
		expect(coordinates).toBeNull();
	});

	it('should handle matrices with different data types', () => {
		const mixedMatrix = [
			['1', 2, '3'],
			[4, '5', 6],
			['7', 8, '9'],
		];

		const targetItem = '5';
		const coordinates = findItemCoordinates(mixedMatrix, targetItem);
		expect(coordinates).toEqual({ row: 1, col: 1 });
	});
});
