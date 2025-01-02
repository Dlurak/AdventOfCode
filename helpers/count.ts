export const count = <T>(
	arr: T[],
	predicate: (val: T, idx: number) => boolean,
) => arr.filter(predicate).length;
