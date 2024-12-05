export function quickSelect<T>(
	arr: T[],
	k: number,
	compare: (a: T, b: T) => number,
): T {
	if (arr.length === 1) {
		return arr[0];
	}

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const pivotIndex = partition(arr, left, right, compare);

		if (pivotIndex === k) {
			return arr[pivotIndex];
		} else if (pivotIndex < k) {
			left = pivotIndex + 1;
		} else {
			right = pivotIndex - 1;
		}
	}

	return arr[k];
}

function partition<T>(
	arr: T[],
	left: number,
	right: number,
	compare: (a: T, b: T) => number,
) {
	const pivot = arr[right];
	let i = left;

	for (let j = left; j < right; j++) {
		if (compare(arr[j], pivot) <= 0) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}

	[arr[i], arr[right]] = [arr[right], arr[i]];
	return i;
}
