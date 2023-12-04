/**
 * Removes double whitespaces from a given string.
 *
 * @param s - The input string from which double whitespaces will be removed.
 * @returns The string with double whitespaces removed.
 *
 * @example
 * ```TypeScript
 * const result = removeDoubleWhitespaces("This   is   a   test");
 * // result is "This is a test"
 * ```
 */
export const removeDoubleWhitespaces = (s: string) => s.replace(/ +/g, ' ');
