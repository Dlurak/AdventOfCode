import { sum } from './sum';

/** Calculates the average of an array of number */
export const average = (values: number[]) => sum(values) / values.length;

/** Calculates the median of an array of numbers */
export const median = (values: number[]) => {
	const sorted = values.slice(0).sort((a, b) => a - b);
	const sortedLength = sorted.length;
	const half = Math.floor(sortedLength / 2);

	return sortedLength % 2
		? values[half]
		: average([values[half - 1], values[half]]);
};
