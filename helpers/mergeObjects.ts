import { unique } from './unique';

// TODO: Test and document it
// TODO: preserve key type (numbers are turned to strings)

export function mergeObjects<T>(
	objects: Record<string | number, T>[],
	conflictResolver: (values: T[]) => T,
) {
	const keys = unique(objects.flatMap(Object.keys));

	const merged: Record<string, T> = {};

	for (const key of keys) {
		const initialValues = objects
			.filter((obj) => key in obj)
			.map((obj) => obj[key]);
		const newValue =
			initialValues.length === 1
				? initialValues[0]
				: conflictResolver(initialValues);
		merged[key] = newValue;
	}

	return merged;
}
