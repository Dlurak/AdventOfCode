import { test, expect } from 'bun:test';
import { chunkify } from '@helper';

test('chunkify', () => {
	expect(chunkify([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
		[1, 2, 3],
		[4, 5, 6],
		[7],
	]);
});
