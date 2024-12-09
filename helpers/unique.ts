/**
 * Removes duplicate elements from an array and returns a new array containing only unique elements.
 *
 * @param array - The array from which to remove duplicates.
 * @returns - A new array containing only unique elements.
 *
 * @example
 * const originalArray = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueArray = unique(originalArray);
 * console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
 */
export const unique = <T extends unknown>(array: T[]): T[] =>
	array.filter((value, index, self) => self.indexOf(value) === index);

export const uniqueBy = <T>(
	arr: T[],
	isEqual: (val1: T, val2: T) => boolean,
): T[] => {
	return arr.reduce((unique: T[], current: T) => {
		const isDuplicate = unique.some((existing) => isEqual(existing, current));
		if (!isDuplicate) {
			unique.push(current);
		}
		return unique;
	}, []);
};
