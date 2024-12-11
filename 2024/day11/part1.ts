import { loadData, mapToInt, showVisualization, words } from '@helper';
import { engraveStone } from './lib';

const input = await loadData();
const initialStones = mapToInt(words(input));

const cache = new Map<number, number[]>();

const cachedEngraving = (stone: number) => {
	const cached = cache.get(stone);
	if (cached) {
		return cached;
	}

	const calculated = engraveStone(stone);
	cache.set(stone, calculated);
	return calculated;
};

let stones = initialStones;
for (let i = 0; i < 25; i++) {
	stones = stones.flatMap(cachedEngraving);
}

if (showVisualization()) {
	console.log(stones.join(' '));
}

console.log(stones.length);
