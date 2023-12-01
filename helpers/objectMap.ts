/**
 * Maps the values of an object using the provided mapper function.
 *
 * @param obj - The input object to map values from.
 * @param mapper - A function that maps each value of the input object to a new value.
 *
 * @returns - A new object with mapped values.
 *
 * @example
 * // Mapping numbers to strings
 * const inputObject = { a: 1, b: 2, c: 3 };
 * const mappedObject = mapValues(inputObject, (value) => String(value));
 * // Result: { a: '1', b: '2', c: '3' }
 */
export const mapValues = <T, R>(
	obj: Record<string, T>,
	mapper: (value: T) => R,
) => {
	const result: Record<string, R> = {};
	for (const key in obj) result[key] = mapper(obj[key]);
	return result;
};
