import { loadData, mapToInt, showVisualization } from '@helper';
import { calcChecksum } from './lib';

const input = await loadData();
const parsedSizes = mapToInt(input.split(''));
const files = parsedSizes.flatMap((size, index) => {
	return Array.from({ length: size }, () =>
		index % 2 ? null : Math.floor(index / 2),
	);
});

/* Sadly very very slow :( but at least elegant
const moveNum = (arr: (number | null)[]): number[] => {
	const arrCopy = arr.slice();
	const nullIndex = arrCopy.findIndex((i) => i === null);
	if (nullIndex === -1) {
		return arrCopy as number[];
	}

	arrCopy[nullIndex] = arrCopy.at(-1)!;
	return moveNum(arrCopy.slice(0, -1));
};
	* */

const moveNum = (arr: (number | null)[]): number[] => {
	const result: number[] = [];
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		if (arr[left] !== null) {
			result.push(arr[left]!);
			left++;
			continue;
		}

		while (arr[right] === null && left < right) {
			right--;
		}

		if (left >= right) {
			break;
		}

		result.push(arr[right]!);
		right--;
		left++;
	}

	return result;
};

if (showVisualization()) {
	console.log(moveNum(files).join(''));
}

console.log(calcChecksum(moveNum(files)));
