export const pair = <T>(arr: T[]) =>
	arr.reduce<[T, T][]>((prev, cur, index): [T, T][] => {
		if (index === arr.length - 1) {
			return prev;
		}

		return [...prev, [cur, arr[index + 1]] as const];
	}, []);
