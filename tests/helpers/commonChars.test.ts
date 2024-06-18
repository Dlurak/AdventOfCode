import { expect, test } from 'bun:test';
import { commonChars } from '@helper';

test('commonChars', () => {
	expect(commonChars(['bella', 'label', 'roller'])).toEqual(
		new Set(['e', 'l', 'l']),
	);
	expect(commonChars(['cool', 'lock', 'cook'])).toEqual(new Set(['c', 'o']));
	expect(commonChars(['abc', 'def', 'ghi'])).toEqual(new Set([]));
	expect(commonChars(['a', 'a', 'a'])).toEqual(new Set(['a']));
	expect(commonChars(['ab', 'bc', 'ca'])).toEqual(new Set([]));
	expect(commonChars([])).toEqual(new Set());
	expect(commonChars([''])).toEqual(new Set());
});
