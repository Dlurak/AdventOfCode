import { expect, test } from 'bun:test';
import { lastElementOfList } from '@helper';

test('last', () => {
	expect(lastElementOfList<undefined>([])).toBe(undefined);
	expect(lastElementOfList(['hi', 'hello', 'world'])).toBe('world');
	expect(lastElementOfList([1, 2, 3, 10, -3])).toBe(-3);
	expect(
		lastElementOfList([
			[1, 2, 3],
			[4, 5, 6],
		]),
	).toEqual([4, 5, 6]);
});
