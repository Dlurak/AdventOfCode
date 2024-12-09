import { describe, it, expect } from 'bun:test';
import { floodFill } from '@helper';

describe('fill', () => {
	it('fills', () => {
		const matrix = [
			[1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 0, 0, 1, 0],
			[0, 0, 0, 0, 0],
		];
		expect(floodFill(matrix, { row: 0, col: 0 }, 2)).toEqual([
			[2, 2, 0, 0, 0],
			[2, 2, 0, 0, 0],
			[0, 0, 0, 1, 0],
			[0, 0, 0, 0, 0],
		]);
	});
});
