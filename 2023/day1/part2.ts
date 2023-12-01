import {
	filterOutNaN,
	lastElementOfList,
	loadData,
	mapToInt,
	numToStr,
	sum,
} from '@helper';
import { numbers } from '@constants';

const input = await loadData({
	day: 1,
	year: 2023,
	part: 2,
});

const replaceNumber = (string: string, numberStr: string, numberNum: number) =>
	string.replaceAll(numberStr, `${numberStr}${numberNum}${numberStr}`);

const serializedInput = Object.entries(numbers).reduce(
	(replaced, entry) => replaceNumber(replaced, entry[0], entry[1]),
	input,
);

const nums = filterOutNaN(
	serializedInput.split('\n').map((l) => {
		const numbers = filterOutNaN(mapToInt(l.split(''))).map(numToStr);

		const num = numbers[0] + lastElementOfList(numbers);
		return parseInt(num);
	}),
);

console.log(sum(nums));
