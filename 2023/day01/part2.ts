import {
	filterOutNaN,
	getKeyByValue,
	lastElementOfList,
	lines,
	loadData,
	mapToInt,
	mapValues,
	replaceMultiple,
	sum,
} from '@helper';
import { numbers } from '@constants';

const input = await loadData();

const serializedInput = replaceMultiple(
	input,
	mapValues(
		numbers,
		(n) => `${getKeyByValue(numbers, n)}${n}${getKeyByValue(numbers, n)}`,
	),
);

const nums = lines(serializedInput, (l) => {
	const numbers = filterOutNaN(mapToInt(l.split('')));
	return parseInt(`${numbers[0]}${lastElementOfList(numbers)}`);
});

console.log(sum(nums));
