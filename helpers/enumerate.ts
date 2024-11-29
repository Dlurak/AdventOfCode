/**
 * Add the index to each array entry
 */
export const enumerate = <T>(arr: T[]): [T, number][] =>
	arr.map((entry, i) => [entry, i]);
