import { loadData, mapToInt, sumBy } from '@helper';

const input = await loadData();
const nums = mapToInt(input.split(''));
const duplicatedNumbers = [...nums, ...nums];
const offset = nums.length / 2;

console.log(
	sumBy(
		nums
			.map((number, i) => [number, duplicatedNumbers[i + offset]] as const)
			.filter(([n1, n2]) => n1 === n2),
		([first]) => first,
	),
);
