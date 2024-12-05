import { isInRange, loadData, mapToInt, words } from '@helper';

const input = await loadData();

const getNumbers = (block: string) =>
	block
		.split('\n')
		.slice(1)
		.map((l) => mapToInt(words(l))) as [number, number, number][];

const convert = (input: number, maps: [number, number, number][]) => {
	const appliedMaps = maps.filter((m) =>
		isInRange(m[1], input, m[1] + m[2] - 1),
	);

	if (appliedMaps.length === 0) return input;

	const appliedMap = appliedMaps[0];
	const offset = appliedMap[0] - appliedMap[1];
	return input + offset;
};

const getLocationForSeed = (seed: number, blocks: string[]) => {
	return blocks.reduce(
		(number, block) => convert(number, getNumbers(block)),
		seed,
	);
};

const blocks = input.split('\n\n');
const seeds = mapToInt(blocks.shift()?.match(/\d+/g) ?? []);
const locations = seeds.map((s) => getLocationForSeed(s, blocks));

console.log(Math.min(...locations));
