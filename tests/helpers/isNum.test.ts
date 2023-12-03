import { test, expect, describe } from 'bun:test';
import { isDigit, isNum } from '@helper';

describe('isNum', () => {
	test('should return true for strings consisting only of numeric characters', () => {
		expect(isNum('123')).toBeTrue();
		expect(isNum('9876543210')).toBeTrue();
	});

	test('should return false for strings containing non-numeric characters', () => {
		expect(isNum('abc')).toBeFalse();
		expect(isNum('12a3')).toBeFalse();
		expect(isNum('')).toBeFalse();
	});
});

describe('isDigit', () => {
	test('should return true for strings containing a single digit', () => {
		expect(isDigit('5')).toBeTrue();
		expect(isDigit('0')).toBeTrue();
	});

	test('should return false for strings containing more than one digit or non-numeric characters', () => {
		expect(isDigit('12')).toBeFalse();
		expect(isDigit('a')).toBeFalse();
		expect(isDigit('a1')).toBeFalse();
		expect(isDigit('')).toBeFalse();
	});
});
