import { test, expect, describe } from 'bun:test';
import { findAllIndexes } from '@helper';

describe('findAllIndexes', () => {
    test('should find all indexes of the specified item in the array', () => {
        const numbers = [1, 2, 3, 4, 2, 5, 2];
        expect(findAllIndexes(numbers, 2)).toEqual([1, 4, 6]);
    });

    test('should handle an empty array and return an empty result', () => {
        const emptyArray: string[] = [];
        expect(findAllIndexes(emptyArray, 'item')).toEqual([]);
    });

    test('should handle an array with no matching item and return an empty result', () => {
        const array = [1, 2, 3];
        expect(findAllIndexes(array, 4)).toEqual([]);
    });

    test('should find all indexes of the specified item in an array with multiple occurrences', () => {
        const array = [1, 2, 3, 2, 4, 2];
        expect(findAllIndexes(array, 2)).toEqual([1, 3, 5]);
    });

    test('should find all indexes of the specified item in an array with mixed types', () => {
        const array = [1, 'two', true, false, true];
        expect(findAllIndexes(array, true)).toEqual([2, 4]);
    });
});
