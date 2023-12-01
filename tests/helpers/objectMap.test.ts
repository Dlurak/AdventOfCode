import { expect, test } from 'bun:test';
import { mapValues } from '@helper';

test('mapValues on objects', () => {
	expect(
		mapValues(
			{
				one: 1,
				two: 2,
			},
			(x) => '' + x,
		),
	).toEqual({
		one: '1',
		two: '2',
	});

	expect(
		mapValues(
			{
				word: 'lowercase',
				more: 'all lowercase',
			},
			(w) => w.toUpperCase(),
		),
	).toEqual({
		word: 'LOWERCASE',
		more: 'ALL LOWERCASE',
	});
});
