/**
 * Applies the parseInt function to each element in the input array and returns an array of parsed integers.
 *
 * @param list - The array of strings to be parsed.
 * @returns  - An array containing the parsed integers.
 *
 * @example
 * const stringArray = ["10", "20", "30"];
 * const parsedIntegers = mapToInt(stringArray);
 * // Result: [10, 20, 30]
 */
export const mapToInt = (list: string[]) => list.map((n) => parseInt(n));
