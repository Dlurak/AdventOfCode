import { unique } from '@helper';

/**
 * Finds and returns the common duplicates between two arrays.
 *
 * @param list1 - The first array to compare.
 * @param list2 - The second array to compare.
 * @returns An array containing the common duplicates found in both lists.
 *
 * @example
 * ```Typescript
 * // Example 1:
 * const list1 = [1, 2, 3, 4, 5];
 * const list2 = [3, 4, 5, 6, 7];
 * const result = findDuplicates(list1, list2);
 * // result should be [3, 4, 5]
 *
 * // Example 2:
 * const words1 = ["apple", "banana", "orange"];
 * const words2 = ["orange", "kiwi", "banana"];
 * const resultWords = findDuplicates(words1, words2);
 * // resultWords should be ["banana", "orange"]
 * ```
 */
export const findDuplicates = <T>(list1: T[], list2: T[]): T[] => {
	const duplicates: T[] = [];

	for (const item of list1)
		if (list2.includes(item)) duplicates.push(item);

	return unique(duplicates);
};
