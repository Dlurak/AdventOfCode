import { LOWER_CHARS, UPPER_CHARS } from '@constants';
import { sum, commonChars, loadData, chunkify, lines, self } from '@helper';

const ALPHABET = [...LOWER_CHARS, ...UPPER_CHARS];

const input = await loadData();

const groups = chunkify(lines(input, self), 3);

const numbers = groups.map((group) => {
	const char = commonChars(group).values().next().value;

	return ALPHABET.indexOf(char) + 1;
});

console.log(sum(numbers));
