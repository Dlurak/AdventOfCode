import {
	filterOut,
	findDuplicates,
	loadData,
	mapToInt,
	removeDoubleWhitespaces,
} from '@helper';

const input = await loadData({
	part: 1,
	day: 4,
	year: 2023,
});
const lines = filterOut(removeDoubleWhitespaces(input).split('\n'), '');
const cards = lines.map((l) =>
	(l.match(/(\d+ )+\d+/g) ?? []).map((s) => mapToInt(s.split(' '))),
);

const queue = [...cards];
let sum = 0;

while (queue.length > 0) {
	const card = queue.shift() as number[][];
	sum++;

	const duplicateAmount = findDuplicates(card[0], card[1]).length;
	for (let i = 1; i <= duplicateAmount; i++)
		queue.push(cards[cards.indexOf(card) + i]);
}

console.log(sum);
