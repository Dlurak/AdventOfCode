import { expect, test } from 'bun:test';
import { isPrime } from '@helper';

test('isPrime', () => {
	const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
	const normalNumbers = [4, 20, 15];

	expect(primeNumbers.map(isPrime).every((a) => a)).toBe(true);
	expect(normalNumbers.map(isPrime).every((a) => !a)).toBe(true);
});
