export const isSorted = <T>(arr: T[], compare: (a: T, b: T) => number) => {
	if (isSorted.length <= 1) {
		return true;
	}

	for (let i = 0; i < arr.length - 1; i++) {
		if (compare(arr[i], arr[i + 1]) > 0) {
			return false;
		}
	}
	return true;
};
