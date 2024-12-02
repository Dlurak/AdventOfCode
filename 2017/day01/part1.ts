import { loadData, sumBy, pair, mapToInt } from '@helper';

const input = await loadData();
const parsed = pair([
	...mapToInt(input.split('')),
	parseInt(input.split('')[0]),
]);

console.log(
	sumBy(
		parsed.filter(([n1, n2]) => n1 === n2),
		([first]) => first,
	),
);
