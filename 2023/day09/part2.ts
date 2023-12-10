import { lastElementOfList, loadData, mapToInt, sum } from '@helper';

const input = await loadData({
	part: 1,
	day: 9,
	year: 2023,
});
const lines = input
	.split('\n')
	.map((l) => mapToInt(l.split(' ')))
	.slice(0, -1);

const getDifferences = (list: number[]) => {
	const differences: number[] = [];
	for (let i = 1; i < list.length; i++) {
		differences.push(list[i] - list[i - 1]);
	}

	return differences;
};

const values: number[] = [];

for (const line of lines) {
	const lineDifferences = [line];

	while (!lineDifferences.at(-1)?.every((n) => n === 0))
		lineDifferences.push(getDifferences(lastElementOfList(lineDifferences)));

	const reversedLineDifferences = lineDifferences.reverse();

	for (let i = 0; i < lineDifferences.length; i++) {
		const prevLine = reversedLineDifferences[Math.max(i - 1, 0)];
		const currentLine = reversedLineDifferences[i];

		const prevLineFirst = prevLine[0];
		const currentLineFirst = currentLine[0];

		reversedLineDifferences[i].unshift(currentLineFirst - prevLineFirst);
	}

	values.push(lastElementOfList(reversedLineDifferences)[0]);
}

console.log(sum(values));
