import { it, expect, describe } from 'bun:test';
import { lcm } from '@helper';

describe('lcm function', () => {
	it('calculates LCM of integers', () => {
		const result = lcm([2, 3, 5, 7]);
		expect(result).toBe(210);
	});

	it('calculates LCM with zeros', () => {
		const result = lcm([0, 4, 8]);
		expect(result).toBe(0);
	});

	it('calculates LCM of a single number', () => {
		const result = lcm([12]);
		expect(result).toBe(12);
	});
});
