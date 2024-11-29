import { loadData, sum } from '@helper';

const input = await loadData();
const lines = input
	.split('\n')
	.map((line) => line.split(/\s/g).map((num) => parseInt(num)));

const quotients = lines.map((line) => {
	return (
		line
			.map((num) => {
				const biggerNums = line.filter((n) => n > num);
				const otherNum = biggerNums.find((b) => b % num === 0) ?? 0;
				return otherNum / num;
			})
			.find((q) => q > 0) ?? 0
	);
});

console.log(sum(quotients));
