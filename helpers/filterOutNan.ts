/**
 * Filters out NaN (Not-a-Number) values from the given list of numbers.
 *
 * @param list - The array of numbers to filter.
 * @returns - A new array containing only non-NaN numbers from the original list.
 *
 * @example
 * const inputList = [1, 2, NaN, 3, 4, NaN, 5];
 * const result = filterOutNaN(inputList);
 * console.log(result); // Output: [1, 2, 3, 4, 5]
 */
export const filterOutNaN = (list: number[]) => list.filter((n) => !isNaN(n));
