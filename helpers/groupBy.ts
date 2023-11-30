type Obj = Record<string, unknown>;
type ObjectKeys<T extends Obj> = keyof T;

/**
 * Groups an array of objects by a specified key.
 *
 * @template T - The type of objects in the array.
 * @param  list - The array of objects to be grouped.
 * @param  key - The property key to group the objects by.
 * @returns  An object where keys are unique values of the specified property,
 * and values are arrays of objects with the same property value.
 *
 * @example
 * const data = [
 *   { id: 1, category: 'A', value: 'foo' },
 *   { id: 2, category: 'B', value: 'bar' },
 *   { id: 3, category: 'A', value: 'baz' },
 * ];
 *
 * const groupedByCategory = groupBy(data, 'category');
 * // Result:
 * // {
 * //   'A': [ { id: 1, category: 'A', value: 'foo' }, { id: 3, category: 'A', value: 'baz' } ],
 * //   'B': [ { id: 2, category: 'B', value: 'bar' } ]
 * // }
 */
export const groupBy = <T extends Obj>(
	list: T[],
	key: ObjectKeys<T>,
): Record<string, T[]> =>
	list.reduce((acc: any, item) => {
		(acc[item[key]] = acc[item[key]] || []).push(item);
		return acc;
	}, {});
