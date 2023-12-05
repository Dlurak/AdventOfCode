import { isInRange, loadData, mapToInt } from '@helper';

const input = await loadData({
	part: 1,
	day: 5,
	year: 2023,
});

const getNumbers = (block: string) =>
	block
		.split('\n')
		.slice(1)
		.map((l) => mapToInt(l.split(' '))) as [number, number, number][];

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
	let number = seed;
	for (const block of blocks) {
		number = convert(number, getNumbers(block));
	}
	return number;
};

const blocks = input.split('\n\n');
const seeds = mapToInt(blocks.shift()?.match(/\d+/g) ?? []);

const locations = seeds.map((s) => getLocationForSeed(s, blocks));

console.log(Math.min(...locations));
