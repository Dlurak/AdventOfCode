/**
 * Checks if a given string consists only of numeric characters.
 *
 * @param s - The input string to be checked.
 * @returns Returns true if the input string consists only of numeric characters, otherwise false.
 *
 * @example
 * ```typescript
 * console.log(isNum('123')); // true
 * console.log(isNum('abc')); // false
 * console.log(isNum('12a3')); // false
 * ```
 */
export const isNum = (s: string) => /^\d+$/.test(s);

/**
 * Checks if a given string is a single digit.
 *
 * @param s - The input string to be checked.
 * @returns Returns true if the input string is a single digit, otherwise false.
 *
 * @example
 * ```typescript
 * console.log(isDigit('5')); // true
 * console.log(isDigit('a')); // false
 * console.log(isDigit('12')); // false
 * ```
 */
export const isDigit = (s: string) => /^\d$/.test(s);
