import { expect, test } from 'bun:test';
import { mapToInt } from '@helper';

test('mapStrToInt', () => {
	expect(mapToInt(['1', '2', '3', '4'])).toEqual([1, 2, 3, 4]);
	expect(mapToInt(['1', '2', '3', '4', 'a', 'Hallo'])).toEqual([
		1,
		2,
		3,
		4,
		NaN,
		NaN,
	]);
	expect(mapToInt([])).toEqual([]);
});
