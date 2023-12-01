import {
	filterOutNaN,
	lastElementOfList,
	mapToInt,
	numToStr,
	sum,
} from '@helper';

const file = Bun.file('./input.txt');
const input = await file.text();

const nums = filterOutNaN(
	input.split('\n').map((l) => {
		const numbers = filterOutNaN(mapToInt(l.split(''))).map(numToStr);

		const num = numbers[0] + lastElementOfList(numbers);
		return parseInt(num);
	}),
);

console.log(sum(nums));
