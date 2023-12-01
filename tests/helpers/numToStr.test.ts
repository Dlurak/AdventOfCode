import { expect, test } from 'bun:test';
import { numToStr } from '@helper';

test('numToStr', () => {
	expect(numToStr(1)).toBe('1')
	expect(numToStr(2)).toBe('2')
	expect(numToStr(42)).toBe('42')
	expect(numToStr(NaN)).toBe('NaN')
})
