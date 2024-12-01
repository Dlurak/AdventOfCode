import {
	loadData,
	sumBy,
	transpose,
	lines,
	words,
	mapToInt,
	sort,
} from '@helper';

const input = await loadData();
const parsed = lines(input, (l) => mapToInt(words(l)));
const nums = transpose(parsed).map((x) => sort(x, (x) => x));

console.log(sumBy(nums[0], (num1, index) => Math.abs(num1 - nums[1][index])));
