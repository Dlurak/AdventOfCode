import { expect, test } from 'bun:test';
import { getKeyByValue } from '@helper';

test('getKeyByValue', () => {
	// TODO: Add more tests
	expect(
		getKeyByValue(
			{
				a: 1,
				b: 2,
				c: 3,
				d: 4,
			},
			2,
		),
	).toBe('b');
});
