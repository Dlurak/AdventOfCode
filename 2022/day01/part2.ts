import { lines, loadData, self, sort, sum } from '@helper';

const input = await loadData();

const parsed = lines(
	input,
	(b) => {
		return sum(lines(b, (l) => parseInt(l)));
	},
	{ size: 'block' },
);

const topThree = sort(parsed, self).reverse().slice(0, 3);

console.log(sum(topThree));
