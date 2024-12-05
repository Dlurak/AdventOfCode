import { describe, it, expect } from 'bun:test';
import { deepEqual } from '@helper';

describe('two things are equal to each other', () => {
	it('works for simple types', () => {
		expect(deepEqual('a', 'a')).toBe(true);
		expect(deepEqual(42, 42)).toBe(true);
		expect(deepEqual(true, true)).toBe(true);
		expect(deepEqual(false, false)).toBe(true);
	});

	it('works for simple objects', () => {
		expect(deepEqual({}, {})).toBe(true);
		expect(deepEqual({ key: 'val' }, { key: 'val' })).toBe(true);
		expect(deepEqual({ key: 'val' }, { key: 'other val' })).toBe(false);
		expect(deepEqual({ key: 'val' }, { key: 'val', key2: 42 })).toBe(false);
	});

	it('works deeply', () => {
		expect(
			deepEqual(
				{ key: { deep: { very: { deep: { isDeep: true } } } } },
				{ key: { deep: { very: { deep: { isDeep: true } } } } },
			),
		).toBe(true);

		expect(
			deepEqual(
				{
					key: {
						deep: { very: { deep: { isDeep: true } }, stuff: { key: 'idk' } },
					},
				},
				{
					key: {
						deep: { very: { deep: { isDeep: true } }, stuff: { key: 'idk' } },
					},
				},
			),
		).toBe(true);

		expect(
			deepEqual(
				{
					key: {
						deep: { very: { deep: { isDeep: true } }, stuff: { key: 'idk' } },
					},
				},
				{ key: { deep: { very: { deep: { isDeep: true } } } } },
			),
		).toBe(false);
	});

	it('works for arrays', () => {
		expect(deepEqual([], [])).toBe(true);
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
		expect(deepEqual(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
		expect(deepEqual(['a', 'b', 'c'], ['a', 'c', 'b'])).toBe(false);
		expect(
			deepEqual(
				[
					[1, 2],
					[3, 4],
				],
				[
					[1, 2],
					[3, 4],
				],
			),
		).toBe(true);
		expect(
			deepEqual(
				[
					[1, 2],
					[3, 4],
				],
				[
					[1, 2],
					[4, 3],
				],
			),
		).toBe(false);

		expect(
			deepEqual(
				[{ arr: [1, 2, 3] }, { arr: ['a', 'b', 'c'] }],
				[{ arr: [1, 2, 3] }, { arr: ['a', 'b', 'c'] }],
			),
		).toBe(true);

		expect(
			deepEqual(
				[{ arr: [1, 2, 3] }, { arr: ['a', 'b', 'c'] }],
				[{ arr: ['a', 'b', 'c'] }, { arr: [1, 2, 3] }],
			),
		).toBe(false);
	});
});
