/**
 * Gets the last element of an array.
 *
 * @param arr - The input array.
 * @returns - The last element of the array, or undefined if the array is empty.
 *
 * @example
 * // Returns undefined
 * lastElementOfList([]);
 *
 * @example
 * // Returns 'world'
 * lastElementOfList(['hi', 'hello', 'world']);
 *
 * @example
 * // Returns -3
 * lastElementOfList([1, 2, 3, 10, -3]);
 *
 * @example
 * // Returns null
 * lastElementOfList([1, 'hello', true, null]);
 *
 * @example
 * // Returns { name: 'Jane' }
 * lastElementOfList([{ name: 'John' }, { name: 'Jane' }]);
 *
 * @example
 * // Returns [1, 2, 3]
 * lastElementOfList([['a', 'b', 'c'], [1, 2, 3]]);
 *
 * @example
 * // Returns 'c'
 * lastElementOfList<undefined>(['a', 'b', 'c']);
 *
 * @example
 * // Returns 3
 * lastElementOfList<null>([1, 2, 3]);
 */
export const lastElementOfList = <T>(list: T[]): T => list[list.length - 1];
