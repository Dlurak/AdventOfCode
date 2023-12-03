import { expect, test } from 'bun:test';
import { unique } from '@helper';

test('sum', () => {
	expect(unique([1, 1, 1, 1, 1, 1, 2])).toEqual([1, 2]);
	expect(unique([])).toEqual([]);
});
