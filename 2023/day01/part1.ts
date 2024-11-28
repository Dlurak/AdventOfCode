import {
	filterOutNaN,
	lastElementOfList,
	loadData,
	mapToInt,
	numToStr,
	sum,
} from '@helper';

const input = await loadData();

const nums = filterOutNaN(
	input.split('\n').map((l) => {
		const numbers = filterOutNaN(mapToInt(l.split(''))).map(numToStr);

		const num = numbers[0] + lastElementOfList(numbers);
		return parseInt(num);
	}),
);

console.log(sum(nums));
