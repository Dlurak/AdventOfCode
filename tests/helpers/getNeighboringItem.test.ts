import { describe, it, expect } from 'bun:test';
import { getneighboringItems } from '@helper';

const exampleMatrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

describe('neighboring items', () => {
	it('works with all sites valid', () => {
		const result = getneighboringItems(exampleMatrix, {
			col: 1,
			row: 1,
		});

		expect(result).toEqual({
			top: 2,
			bottom: 8,
			left: 4,
			right: 6,
		});
	});

	it('works with the left top corner', () => {
		const result = getneighboringItems(exampleMatrix, {
			col: 0,
			row: 0,
		});

		expect(result).toEqual({
			top: undefined,
			bottom: 4,
			left: undefined,
			right: 2,
		});
	});
});
