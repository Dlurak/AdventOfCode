import { expect, test } from 'bun:test';
import { unique, uniqueBy } from '@helper';

test('unique', () => {
	expect(unique([1, 1, 1, 1, 1, 1, 2])).toEqual([1, 2]);
	expect(unique([])).toEqual([]);
});

test('uniqueBy', () => {
	expect(
		uniqueBy([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }], (a, b) => a.a === b.a),
	).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
});
