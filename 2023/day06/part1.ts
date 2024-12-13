import {
	lines,
	loadData,
	mapToInt,
	product,
	range,
	transpose,
	words,
} from '@helper';

const input = await loadData();
const races = transpose(lines(input, (s) => mapToInt(words(s)))).slice(1);

const calculateDistance = (buttonMs: number, time: number) =>
	(time - buttonMs) * buttonMs;

const allPossibilites = races.map(([raceTime, recordDistance]) => {
	return range(raceTime + 1).filter(
		(i) => recordDistance < calculateDistance(i, raceTime),
	).length;
});

console.log(product(allPossibilites));
