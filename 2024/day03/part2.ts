import { loadData, mapToInt, product } from '@helper';

const input = await loadData();
const instructions = input.match(/mul\(\d{1,3},\d{1,3}\)|do(?:n't)?\(\)/g);

if (!instructions) {
	throw new Error('Invalid data');
}

const { result } = instructions.reduce(
	(acc, instruction) => {
		if (instruction === "don't()") {
			return { isEnabled: false, result: acc.result };
		}
		if (instruction === 'do()') {
			return { isEnabled: true, result: acc.result };
		}

		if (!acc.isEnabled) {
			return acc;
		}

		const factors = mapToInt(instruction.slice(4, -1).split(','));
		return {
			isEnabled: acc.isEnabled,
			result: acc.result + product(factors),
		};
	},
	{ isEnabled: true, result: 0 },
);

console.log(result);
