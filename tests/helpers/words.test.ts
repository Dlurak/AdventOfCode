import { words } from '@helper';
import { describe, it, expect } from 'bun:test';

describe('words', () => {
	it('splits a simple sentence into words', () => {
		expect(words('Hello world!')).toEqual(['Hello', 'world!']);
	});

	it('handles multiple spaces correctly', () => {
		expect(words('This   is      a test')).toEqual(['This', 'is', 'a', 'test']);
	});

	it('handles tabs and newlines as whitespace', () => {
		expect(words('This\tis\na test')).toEqual(['This', 'is', 'a', 'test']);
	});

	it('trims leading and trailing whitespace', () => {
		expect(words('   Leading and trailing   ')).toEqual([
			'Leading',
			'and',
			'trailing',
		]);
	});
});
