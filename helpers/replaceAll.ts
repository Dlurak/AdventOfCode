/**
 * Replaces multiple occurrences of substrings in a given string based on a replacement mapping.
 *
 * @param str - The input string in which replacements will be performed.
 * @param replace - An object representing the replacement mapping, where keys are substrings to be replaced and values are the replacements.
 * @returns - The modified string after performing the specified replacements.
 *
 * @example
 * // Replace 'apple' with 'orange' and 'banana' with 'grape' in the given string.
 * const result = replaceMultiple('apple and banana', { 'apple': 'orange', 'banana': 'grape' });
 * // Result: 'orange and grape'
 */
export const replaceMultiple = (str: string, replace: Record<string, string>) =>
	Object.entries(replace).reduce(
		(replaced, entry) => replaced.replaceAll(entry[0], entry[1]),
		str,
	);
