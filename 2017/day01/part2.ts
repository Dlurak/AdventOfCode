import { loadData, sum } from '@helper';

const input = await loadData();
const nums = input.split('').map((num) => parseInt(num));
const duplicatedNumbers = [...nums, ...nums];
const offset = nums.length / 2;

console.log(
	sum(
		nums
			.map((number, i) => [number, duplicatedNumbers[i + offset]] as const)
			.filter(([n1, n2]) => n1 === n2)
			.map(([first]) => first),
	),
);
