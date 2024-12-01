/**
 * Finds common characters in all given strings.
 *
 * @param strings - An array of strings to find common characters in.
 * @returns An array of common characters found in all strings.
 */
export function commonChars(strings: string[]) {
	const refString = strings.at(0);
	if (!refString) return new Set<string>();

	const comparisonStrings = strings.slice(1);

	const chars = refString
		.split('')
		.filter((char) => comparisonStrings.every((s) => s.includes(char)));

	return new Set(chars);
}
