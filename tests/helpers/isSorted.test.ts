import { isSorted } from '@helper';
import { describe, it, expect } from 'bun:test';

const numberCompare = (a: number, b: number): number => a - b;
const stringCompare = (a: string, b: string): number => a.localeCompare(b);

describe('isSorted', () => {
	it('returns true for sorted number array', () => {
		const numArray = [1, 2, 3, 4, 5];
		expect(isSorted(numArray, numberCompare)).toBe(true);
	});

	it('returns false for unsorted number array', () => {
		const numArray = [1, 3, 2, 4, 5];
		expect(isSorted(numArray, numberCompare)).toBe(false);
	});

	it('returns true for sorted string array', () => {
		const strArray = ['apple', 'banana', 'cherry'];
		expect(isSorted(strArray, stringCompare)).toBe(true);
	});

	it('returns false for unsorted string array', () => {
		const strArray = ['apple', 'cherry', 'banana'];
		expect(isSorted(strArray, stringCompare)).toBe(false);
	});

	it('returns true for empty array', () => {
		const emptyArray: number[] = [];
		expect(isSorted(emptyArray, numberCompare)).toBe(true);
	});

	it('returns true for array with one element', () => {
		const singleElementArray = [42];
		expect(isSorted(singleElementArray, numberCompare)).toBe(true);
	});
});
