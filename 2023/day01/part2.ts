import {
	filterOutNaN,
	getKeyByValue,
	lastElementOfList,
	loadData,
	mapToInt,
	mapValues,
	numToStr,
	replaceMultiple,
	sum,
} from '@helper';
import { numbers } from '@constants';

const input = await loadData({
	day: 1,
	year: 2023,
	part: 2,
});

const serializedInput = replaceMultiple(
	input,
	mapValues(
		numbers,
		(n) => `${getKeyByValue(numbers, n)}${n}${getKeyByValue(numbers, n)}`,
	),
);

const nums = filterOutNaN(
	serializedInput.split('\n').map((l) => {
		const numbers = filterOutNaN(mapToInt(l.split(''))).map(numToStr);

		const num = numbers[0] + lastElementOfList(numbers);
		return parseInt(num);
	}),
);

console.log(sum(nums));
