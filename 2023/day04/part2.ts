import {
	filterOut,
	findDuplicates,
	loadData,
	removeDoubleWhitespaces,
} from '@helper';

const input = await loadData();
const lines = filterOut(removeDoubleWhitespaces(input).split('\n'), '');
let cards = lines.map((l) => {
	const numbers = (l.match(/(\d+ )+\d+/g) ?? []).map((s) => s.split(' '));

	return {
		id: parseInt((l.match(/\d+/) ?? ['0'])[0]),
		duplicatesAmount: findDuplicates(numbers[0], numbers[1]).length,
		instances: 1,
	};
});

let sum = 0;

for (const card of cards) {
	sum += card.instances;

	for (let j = 0; j < card.duplicatesAmount; j++)
		cards[card.id + j].instances += card.instances;
}

console.log(sum);
