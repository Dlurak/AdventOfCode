import { lastElementOfList, loadData, mapToInt, sum } from '@helper';

const input = await loadData();
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

const values = [];

for (const line of lines) {
	const lineDifferences = [line];

	while (!lineDifferences.at(-1)?.every((n) => n === 0))
		lineDifferences.push(getDifferences(lastElementOfList(lineDifferences)));

	const reversedLineDifferences = lineDifferences.reverse();

	for (let i = 1; i < lineDifferences.length; i++) {
		let numberToAdd = lastElementOfList(reversedLineDifferences[i - 1]);
		reversedLineDifferences[i].push(
			numberToAdd + lastElementOfList(reversedLineDifferences[i]),
		);
	}

	values.push(lastElementOfList(lastElementOfList(reversedLineDifferences)));
}

console.log(sum(values));
