/**
 * Calculates the sum of all elements in the input array.
 *
 * @param list - The array of numbers to be summed.
 * @returns - The sum of all elements in the array.
 *
 * @example
 * const numberArray = [10, 20, 30];
 * const resultSum = sum(numberArray);
 * // Result: 60
 */
export const sum = (list: number[]) => list.reduce((sum, num) => sum + num, 0);
