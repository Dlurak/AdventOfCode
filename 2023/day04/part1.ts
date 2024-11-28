import {
	filterOut,
	findDuplicates,
	loadData,
	mapToInt,
	removeDoubleWhitespaces,
	sum,
} from '@helper';

const input = await loadData();

const doubleXTimes = (number: number, x: number) => {
	let result = number;
	for (let i = 0; i < x; i++) result *= 2;

	return result;
};

const getPoints = (matches: number) =>
	matches < 1 ? 0 : doubleXTimes(1, Math.max(matches - 1, 0));

const values: number[] = [];
const lines = filterOut(removeDoubleWhitespaces(input).split('\n'), '');
for (const line of lines) {
	const [ownNumbers, winningNumbers] = (line.match(/(\d+ )+\d+/g) ?? []).map(
		(s) => mapToInt(s.split(' ')),
	);

	const duplicates = findDuplicates(ownNumbers, winningNumbers);
	values.push(getPoints(duplicates.length));
}

console.log(sum(values));
