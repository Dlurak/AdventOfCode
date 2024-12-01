import {
	countGroups,
	lines,
	loadData,
	mapToInt,
	sumBy,
	transpose,
	words,
} from '@helper';

const input = await loadData();
const nums = transpose(lines(input, (l) => mapToInt(words(l))));
const counts = countGroups(nums[1]);

console.log(sumBy(nums[0], (num) => num * (counts[num] ?? 0)));
