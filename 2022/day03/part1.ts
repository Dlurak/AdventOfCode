import { LOWER_CHARS, UPPER_CHARS } from '@constants';
import { commonChars, loadData, sum } from '@helper';

const ALPHABET = [...LOWER_CHARS, ...UPPER_CHARS];

const input = await loadData();

const lines = input.split('\n').slice(0, -1);

function getCompartments(line: string) {
	const compartmentSize = line.length / 2;

	return [line.slice(0, compartmentSize), line.slice(compartmentSize)];
}

const numbers = lines.map((line) => {
	const char = commonChars(getCompartments(line)).values().next().value;
	return ALPHABET.indexOf(char) + 1;
});

console.log(sum(numbers));
