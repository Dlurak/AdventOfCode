import {
	filterOutNaN,
	lastElementOfList,
	lines,
	loadData,
	mapToInt,
	sum,
} from '@helper';

const input = await loadData();

const nums = lines(input, (l) => {
	const numbers = filterOutNaN(mapToInt(l.split('')));
	return parseInt(`${numbers[0]}${lastElementOfList(numbers)}`);
});

console.log(sum(nums));
