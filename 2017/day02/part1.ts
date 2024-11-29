import { loadData, sum } from '@helper';

const input = await loadData();
const lines = input
	.split('\n')
	.map((line) => line.split(/\s/g).map((num) => parseInt(num)));

const diffs = lines.map((line) => Math.max(...line) - Math.min(...line));

console.log(sum(diffs));
