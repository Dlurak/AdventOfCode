import { it, expect, describe } from 'bun:test';
import { countGroups } from '@helper';

describe('countGroups', () => {
	it('should count the occurrences of each element in the list', () => {
		const inputList = ['a', 'b', 'a', 'c', 'b', 'a'];
		const result = countGroups(inputList);

		const expectedCounts = {
			a: 3,
			b: 2,
			c: 1,
		};
		expect(result).toEqual(expectedCounts);
	});

	it('should handle an empty list', () => {
		const inputList: string[] = [];
		const result = countGroups(inputList);

		const expectedCounts = {};

		expect(result).toEqual(expectedCounts);
	});
});
