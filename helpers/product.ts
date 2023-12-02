/**
 * Calculates the product of all elements in the given list of numbers.
 *
 * @param list - The list of numbers to calculate the product for.
 * @returns The product of all elements in the list.
 *
 * @example
 * const result = product([2, 3, 4]); // Returns 24 (2 * 3 * 4)
 */
export const product = (list: number[]) => {
	if (list.length === 0) return NaN;
	return list.reduce((sum, num) => sum * num);
};
