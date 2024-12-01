/**
 * Counts the occurrences of each element in the input list and returns an object
 * with the counts.
 *
 * @param list - The input list of elements.
 * @returns An object where keys are the unique elements in the input list, and values are the counts of their occurrences.
 */
export const countGroups = <T extends string | number | symbol>(list: T[]) => {
	const counts: Partial<Record<T, number>> = {};

	for (const i of list) counts[i] = (counts[i] ?? 0) + 1;
	return counts;
};
