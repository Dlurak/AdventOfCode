type AllRecords<T> = Record<string | number | symbol, T>;

/**
 * Retrieves the first key in the given object that corresponds to the specified value.
 *
 * @param object - The object to search for the specified value.
 * @param value - The value to find within the object.
 * @returns - The key corresponding to the specified value, or null if not found.
 *
 * @example
 * // Example Usage:
 * const myObject = { a: 1, b: 2, c: 3, d: 2 };
 * const valueToFind = 2;
 * const foundKey = getKeyByValue(myObject, valueToFind);
 * console.log(foundKey); // Output: 'b' (the first key where the value is 2)
 */
export const getKeyByValue = <T extends AllRecords<unknown>>(
	object: T,
	value: T[keyof T],
): keyof T | null => {
	for (const key in object) if (object[key as any] === value) return key;
	return null;
};
