import {
	countGroups,
	loadData,
	mapToInt,
	mapValues,
	showVisualization,
	sum,
	mergeObjects,
	words,
} from '@helper';
import { engraveStone } from './lib';

const input = await loadData();
const stones = mapToInt(words(input));

function proccessStoneCount(stoneCounts: Record<string | number, number>) {
	const counts = Object.entries(stoneCounts).map(([stone, count]) => {
		const newStones = engraveStone(parseInt(stone));
		return mapValues(countGroups(newStones), (v) => v! * count);
	});
	return mergeObjects(counts, sum);
}

let counts = countGroups(stones) as Record<number, number>;
for (let i = 0; i < 75; i++) {
	counts = proccessStoneCount(counts);
}

if (showVisualization()) {
	const stoneGroups = Object.entries(counts).map(([stone, length]) =>
		Array.from({ length }, () => stone).join(' '),
	);
	console.log(stoneGroups.join(' '));
}

console.log(sum(Object.values(counts)));
