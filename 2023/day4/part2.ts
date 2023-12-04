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
	for (let i = 0; i < card.instances; i++) {
		sum++;
		for (let j = 0; j < card.duplicatesAmount; j++) {
			const editCard = cards[card.id + j];
			editCard.instances++;
		}
	}
}

console.log(sum);
