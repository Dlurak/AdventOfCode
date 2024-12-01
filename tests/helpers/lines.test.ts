import { lines } from '@helper';
import { describe, it, expect } from 'bun:test';

describe('lines', () => {
	it('splits content by line and processes each line with the mapper', () => {
		expect(
			lines('Hello\nWorld\nHow are you?', (line) => line.toUpperCase()),
		).toEqual(['HELLO', 'WORLD', 'HOW ARE YOU?']);
	});

	it('splits content by block and processes each block with the mapper', () => {
		expect(
			lines(
				'Hello\nWorld\n\nHow are you?\nFine.',
				(block) => block.toUpperCase(),
				{ size: 'block' },
			),
		).toEqual(['HELLO\nWORLD', 'HOW ARE YOU?\nFINE.']);
	});

	it('uses the default mapper when no mapper is provided', () => {
		expect(lines('Line 1\nLine 2')).toEqual(['Line 1', 'Line 2']);
	});

	it('handles single-line input correctly', () => {
		expect(lines('Single line content     ', (line) => line.trim())).toEqual([
			'Single line content',
		]);
	});
});
