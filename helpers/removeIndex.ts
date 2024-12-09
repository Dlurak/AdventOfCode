/**
 * Removes the element at the specified index from an array without modifying the original array.
 *
 * @param arr - The original array.
 * @param index - The index of the element to remove.
 * @returns A new array with the specified element removed.
 */
export const removeIndex = <T>(arr: T[], index: number) => [
	...arr.slice(0, index),
	...arr.slice(index + 1),
];
