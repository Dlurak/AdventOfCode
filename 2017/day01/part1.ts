import { loadData, sum, pair } from '@helper';

const input = await loadData();

console.log(
	sum(
		pair([
			...input.split('').map((num) => parseInt(num)),
			parseInt(input.split('')[0]),
		])
			.filter(([n1, n2]) => n1 === n2)
			.map(([first]) => first),
	),
);
