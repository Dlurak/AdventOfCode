import { lastElementOfList, loadData, sum } from '@helper';

const input = await loadData({
	part: 1,
	day: 3,
	year: 2023,
});

const findNumberIndexes = (line: string): number[][] => {
	const numberIndexes: number[][] = [];
	let currentNumberIndexes: number[] = [];

	for (let i = 0; i < line.length; i++) {
		const char = line[i];

		if (/\d/.test(char)) {
			currentNumberIndexes.push(i);
		} else if (currentNumberIndexes.length > 0) {
			numberIndexes.push([...currentNumberIndexes]);
			currentNumberIndexes = [];
		}
	}

	if (currentNumberIndexes.length > 0)
		numberIndexes.push([...currentNumberIndexes]);

	return numberIndexes;
};

const unique = (array: unknown[]) =>
	array.filter((value, index, self) => self.indexOf(value) === index);

type ThreeStrings = [string, string, string];

const getCharsAtIndex = (
	inputString: string,
	startIndex: number,
	endIndex: number,
): string => {
	if (
		startIndex >= 0 &&
		endIndex >= startIndex &&
		endIndex < inputString.length
	) {
		const slicedString = inputString.slice(startIndex, endIndex + 1);
		return slicedString;
	} else return '';
};

const getCharsAroundIndex = (indexes: number[], lines: ThreeStrings) => {
	const startIndex = indexes[0];
	const endIndex = lastElementOfList(indexes);

	const charBeforeIndex = (str: string, index: number) =>
		index === 0 ? '' : str[index - 1];
	const charAfterIndex = (str: string, index: number) =>
		index + 1 < str.length ? str[index + 1] : '';

	const firstLine = [
		...getCharsAtIndex(lines[0], startIndex, endIndex),
		charBeforeIndex(lines[0], startIndex),
		charAfterIndex(lines[0], endIndex),
	].join('');

	const lastLine = [
		...getCharsAtIndex(lines[2], startIndex, endIndex),
		charBeforeIndex(lines[2], startIndex),
		charAfterIndex(lines[2], endIndex),
	].join('');

	const middleLine = [
		charBeforeIndex(lines[1], startIndex),
		charAfterIndex(lines[1], endIndex),
	].join('');

	return unique(
		(firstLine + lastLine + middleLine).split('').filter((s) => s !== '.'),
	);
};

const pointsForIndex = (lines: ThreeStrings, indexes: number[]) => {
	const chars = getCharsAroundIndex(indexes, lines);
	const isNextToSymbol = chars.length > 0;

	if (!isNextToSymbol) return 0;
	return parseInt(
		getCharsAtIndex(lines[1], indexes[0], lastElementOfList(indexes)),
	);
};

const lines = input.split('\n');

let prevLine = '';
let i = 1;
let nextLine = lines[i];

const points: number[] = [];
for (const line of lines) {
	const iterPoints = findNumberIndexes(line).map((indexes) =>
		pointsForIndex([prevLine, line, nextLine], indexes),
	);
	points.push(sum(iterPoints));

	i++
	prevLine = line;
	nextLine = lines[i]
}

console.log(sum(points));
