import {
	isDigit,
	loadData,
	product,
	sum,
	removeConsecutiveNumbers,
	findAllIndexes,
	filterOut,
} from '@helper';

const input = await loadData();

const getNumberAtIndex = (str: string, index: number) => {
	// Validate the input parameters
	if (index < 0 || index >= str.length) return NaN;

	// Find the start and end indices of the number containing the specified index
	let startIndex = index;
	while (startIndex > 0 && /\d/.test(str[startIndex - 1])) startIndex--;

	let endIndex = index;
	while (endIndex < str.length - 1 && /\d/.test(str[endIndex + 1])) endIndex++;

	// Extract the number from the string
	const number = str.slice(startIndex, endIndex + 1);

	return parseInt(number);
};

const getNumbersAroundIndex = (
	index: number,
	lines: [string, string, string],
) => {
	const charBeforeIndex = (str: string, index: number) =>
		index === 0 ? '' : str[index - 1];
	const charAfterIndex = (str: string, index: number) =>
		index + 1 < str.length ? str[index + 1] : '';

	const firstLine = [
		isDigit(charBeforeIndex(lines[0], index)) ? index - 1 : -1,
		isDigit(lines[0].split('')[index]) ? index : -1,
		isDigit(charAfterIndex(lines[0], index)) ? index + 1 : -1,
	];

	const middleLine = [
		isDigit(charBeforeIndex(lines[1], index)) ? index - 1 : -1,
		isDigit(charAfterIndex(lines[1], index)) ? index + 1 : -1,
	];

	const lastLine = [
		isDigit(charBeforeIndex(lines[2], index)) ? index - 1 : -1,
		isDigit(lines[2].split('')[index]) ? index : -1,
		isDigit(charAfterIndex(lines[2], index)) ? index + 1 : -1,
	];

	return [firstLine, middleLine, lastLine].map((l, i) => {
		const indexes = removeConsecutiveNumbers(filterOut(l, -1));

		return indexes.map((ind) => getNumberAtIndex(lines[i], ind));
	});
};

const lines = input.split('\n');
const products: number[] = [];

let prevLine = '';
let i = 1;
let nextLine = lines[i];

for (const line of lines) {
	const starIndexes = findAllIndexes(line.split(''), '*');

	for (const gearIndex of starIndexes) {
		const nums = getNumbersAroundIndex(gearIndex, [
			prevLine,
			line,
			nextLine,
		]).flat();

		if (nums.length !== 2) continue;

		products.push(product(nums));
	}

	prevLine = line;
	i++;
	nextLine = lines[i];
}

console.log(sum(products));
