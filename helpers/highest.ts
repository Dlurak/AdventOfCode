/**
 * Finds the element in the array that yields the highest value from a given numerical function,
 * and returns it along with the calculated value and its index.
 *
 * @template T - The type of the elements in the array.
 * @param arr - The array to search through.
 * @param num - A function that takes an element from the array and returns a numerical value.
 * @returns An array containing:
 *   - The element with the highest calculated value,
 *   - The highest calculated value,
 *   - The index of the element in the array.
 *   Returns `null` if the input array is empty.
 *
 * @example
 * ```typescript
 * const items = [{score: 5}, {score: 10}, {score: 7}];
 * const result = highestBy(items, item => item.score);
 * console.log(result);
 * ```
 */
export const highestBy = <T>(arr: T[], num: (val: T) => number) => {
	return arr.reduce<[T, number, number] | null>((prev, cur, index) => {
		if (!prev) {
			return [cur, num(cur), index];
		}

		if (num(cur) > prev[1]) {
			return [cur, num(cur), index];
		}

		return prev;
	}, null);
};
