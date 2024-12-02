import { LOWER_CHARS, UPPER_CHARS } from '@constants';
import { commonChars, lines, loadData, sum } from '@helper';

const ALPHABET = [...LOWER_CHARS, ...UPPER_CHARS];

const input = await loadData();

function getCompartments(line: string) {
	const compartmentSize = line.length / 2;

	return [
		line.slice(0, compartmentSize),
		line.slice(compartmentSize),
	] satisfies [string, string];
}

const numbers = lines(input, (line) => {
	const char = commonChars(getCompartments(line)).values().next().value;
	return ALPHABET.indexOf(char) + 1;
});

console.log(sum(numbers));
