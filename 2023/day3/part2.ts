import { lastElementOfList, loadData, product, sum } from '@helper';

const input = await loadData({
	part: 1,
	day: 3,
	year: 2023,
});

type ThreeStrings = [string, string, string];

const isNumber = (s: string) => /\d/.test(s);
const isInRange = (
	number1: number,
	number2: number,
	number3: number,
): boolean => number1 <= number2 && number2 <= number3;

const preserveConsecutiveNumbers = (numbers: number[]): number[] => {
	const isConsecutive = (number1: number, number2: number) =>
		number2 - number1 === 1;

	return numbers.filter(
		(element, index) => !isConsecutive(numbers[index - 1] ?? NaN, element),
	);
};

const getNumberAtIndex = (str: string, index: number) => {
	// Validate the input parameters
	if (index < 0 || index >= str.length) {
		console.error('Invalid index');
		return NaN;
	}

	// Find the start and end indices of the number containing the specified index
	let startIndex = index;
	while (startIndex > 0 && /\d/.test(str[startIndex - 1])) startIndex--;

	let endIndex = index;
	while (endIndex < str.length - 1 && /\d/.test(str[endIndex + 1])) endIndex++;

	// Extract the number from the string
	const number = str.slice(startIndex, endIndex + 1);

	return parseInt(number);
};

const getNumbersAroundIndex = (index: number, lines: ThreeStrings) => {
	const charBeforeIndex = (str: string, index: number) =>
		index === 0 ? '' : str[index - 1];
	const charAfterIndex = (str: string, index: number) =>
		index + 1 < str.length ? str[index + 1] : '';

	const firstLine = [
		isNumber(charBeforeIndex(lines[0], index)) ? index - 1 : -1,
		isNumber(lines[0].split('')[index]) ? index : -1,
		isNumber(charAfterIndex(lines[0], index)) ? index + 1 : -1,
	];

	const middleLine = [
		isNumber(charBeforeIndex(lines[1], index)) ? index - 1 : -1,
		isNumber(charAfterIndex(lines[1], index)) ? index + 1 : -1,
	];

	const lastLine = [
		isNumber(charBeforeIndex(lines[2], index)) ? index - 1 : -1,
		isNumber(lines[2].split('')[index]) ? index : -1,
		isNumber(charAfterIndex(lines[2], index)) ? index + 1 : -1,
	];

	return [firstLine, middleLine, lastLine].map((l, i) => {
		const indexes = preserveConsecutiveNumbers(l.filter((n) => n !== -1));
		const line = lines[i];

		const numbers = indexes.map((ind) => getNumberAtIndex(line, ind));
		return numbers;
	});
};

const findAllIndexes = <T extends unknown[]>(list: T, item: T[number]) =>
	list.map((ele, i) => (ele === item ? i : -1)).filter((i) => i !== -1);

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
