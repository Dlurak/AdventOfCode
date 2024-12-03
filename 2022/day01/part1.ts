import { lines, loadData, sum } from '@helper';

const input = await loadData();

const parsed = lines(
	input,
	(b) => {
		return sum(lines(b, (l) => parseInt(l)));
	},
	{ size: 'block' },
);

console.log(Math.max(...parsed));
