/**
 * Generates an array of numbers within a specified range.
 *
 * @param size - The size of the range.
 * @param [startAt=0] - The starting value of the range.
 * @returns - An array of numbers within the specified range.
 *
 * @example
 * const result = range(5);
 * // Result: [0, 1, 2, 3, 4]
 *
 * @example
 * const result = range(5, 3);
 * // Result: [3, 4, 5, 6, 7]
 */
export const range = (size: number, startAt: number = 0) =>
	[...Array(size).keys()].map((i) => i + startAt);

/**
 * Checks if a given number is within a specified range.
 *
 * @param min - The minimum value of the range.
 * @param num - The number to be checked.
 * @param max - The maximum value of the range.
 * @returns - `true` if the number is within the range, otherwise `false`.
 *
 * @example
 * const result = isInRange(1, 3, 5);
 * // Result: true
 *
 * @example
 * const result = isInRange(1, 6, 10);
 * // Result: false
 */
export const isInRange = (min: number, num: number, max: number) => min <= num && num <= max;
