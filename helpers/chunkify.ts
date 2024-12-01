type Repeat<T, N extends number, Acc extends T[] = []> = Acc['length'] extends N
	? Acc
	: Acc['length'] extends 0
	  ? Repeat<T, N, [...Acc, T]>
	  : Repeat<T, N, [...Acc, T]> | Acc;

export function chunkify<T, N extends number>(array: T[], chunkSize: N) {
	if (chunkSize <= 0) {
		throw new Error('Chunk size must be greater than 0');
	}

	const result: Repeat<T, N>[] = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		result.push(array.slice(i, i + chunkSize) as Repeat<T, N>);
	}

	return result;
}
