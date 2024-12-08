import { describe, it, expect } from 'bun:test';
import { findByOffset } from '@helper';
import { OFFSETS } from '@constants';

describe('findByOffset', () => {
	it('works', () => {
		const result = findByOffset(
			[
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'.#.............'.split(''),
				'...............'.split(''),
			],
			OFFSETS.bottom,
			{ row: 1, col: 1 },
			(char) => char === '#',
		);
		expect(result).toEqual({
			value: '#',
			coord: { row: 4, col: 1 },
		});
	});
	it('works with diagonal offsets', () => {
		const result = findByOffset(
			[
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'.....#.........'.split(''),
			],
			OFFSETS.bottomRight,
			{ row: 0, col: 0 },
			(char) => char === '#',
		);
		expect(result).toEqual({
			value: '#',
			coord: { row: 5, col: 5 },
		});
	});
	it('works with multistep offsets', () => {
		const result = findByOffset(
			[
				'...............'.split(''),
				'...............'.split(''),
				'......p........'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
			],
			[3, 1],
			{ row: 0, col: 0 },
			(char) => char === 'p',
		);
		expect(result).toEqual({
			value: 'p',
			coord: { row: 2, col: 6 },
		});
	});
	it('works when nothing is found', () => {
		const result = findByOffset(
			[
				[...'...........'.split(''), undefined, ...'...'.split('')],
				'...............'.split(''),
				'......p........'.split(''),
				'...............'.split(''),
				'...............'.split(''),
				'...............'.split(''),
			],
			OFFSETS.left,
			{ row: 0, col: 0 },
			(char) => char === 'p',
		);
		expect(result).toBeNull();
	});
});
