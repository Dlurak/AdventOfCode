/**
 * Finds all indexes of a specified item in an array.
 *
 * @param list - The array to search through.
 * @param item - The item to find in the array.
 * @returns - An array containing all indexes of the specified item.
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4, 2, 5, 2];
 *
 * // Find all indexes of the number 2 in the array
 * const indexes = findAllIndexes(numbers, 2);
 *
 * console.log(indexes);
 * // Output: [1, 4, 6]
 * ```
 *
 * @example
 * ```typescript
 * const fruits = ['apple', 'banana', 'orange', 'banana', 'grape'];
 *
 * // Find all indexes of the string 'banana' in the array
 * const indexes = findAllIndexes(fruits, 'banana');
 *
 * console.log(indexes);
 * // Output: [1, 3]
 * ```
 */
export const findAllIndexes = <T extends unknown[]>(list: T, item: T[number]) =>
	list.map((ele, i) => (ele === item ? i : -1)).filter((i) => i !== -1);
