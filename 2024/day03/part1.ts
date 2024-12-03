import { loadData, mapToInt, sumBy, product } from '@helper';

const input = await loadData();
const instructions = input.match(/mul\(\d{1,3},\d{1,3}\)/g);

if (!instructions) {
	throw new Error('Invalid data');
}

console.log(
	sumBy(instructions, (group) => {
		const factors = mapToInt(group.slice(4, -1).split(','));
		return product(factors);
	}),
);
