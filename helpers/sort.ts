/**
 * Sorts an array based on a predicate function that maps each element to a value (string or number).
 *
 * @template T The type of elements in the array.
 * @param arr - The array to be sorted.
 * @param predicate - A function that maps an element of the array to a value (string or number) used for sorting.
 * @returns A new array sorted based on the mapped values from the predicate.
 *
 * @example
 * ```typescript
 * const data = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
 * const sortedByAge = sort(data, (item) => item.age);
 * console.log(sortedByAge); // [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }]
 *
 * const sortedByName = sort(data, (item) => item.name);
 * console.log(sortedByName); // [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
 * ```
 */
export const sort = <T>(arr: T[], predicate: (value: T) => string | number) => {
	return arr.toSorted((a, b) => {
		const aMapped = predicate(a);
		const bMapped = predicate(b);

		if (typeof aMapped === 'number') {
			return aMapped - Number(`${bMapped}`);
		}

		return aMapped.localeCompare(`${bMapped}`);
	});
};
