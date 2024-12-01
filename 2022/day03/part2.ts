import { LOWER_CHARS, UPPER_CHARS } from '@constants';
import { sum, commonChars, loadData, chunkify } from '@helper';

const ALPHABET = [...LOWER_CHARS, ...UPPER_CHARS];

const input = await loadData({
	year: 2022,
	day: 3,
	part: 1,
});

const lines = input.split('\n').slice(0, -1);
const groups = chunkify(lines, 3);

const numbers = groups.map((group) => {
	const char = commonChars(group).values().next().value;

	return ALPHABET.indexOf(char) + 1;
});

console.log(sum(numbers));
