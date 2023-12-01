import {
	filterOutNaN,
	lastElementOfList,
	loadData,
	mapToInt,
	numToStr,
	sum,
} from '@helper';

const input = await loadData({
	day: 1,
	year: 2023,
	part: 1,
});

const nums = filterOutNaN(
	input.split('\n').map((l) => {
		const numbers = filterOutNaN(mapToInt(l.split(''))).map(numToStr);

		const num = numbers[0] + lastElementOfList(numbers);
		return parseInt(num);
	}),
);

console.log(sum(nums));
