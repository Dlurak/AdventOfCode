import { filterOutNaN, loadData, mapToInt, product, transpose } from '@helper';

const input = await loadData();

const races = transpose(
	input
		.split('\n')
		.map((s) => filterOutNaN(mapToInt(s.split(' '))))
		.slice(0, -1),
);

const calculateDistance = (buttonMs: number, time: number) =>
	(time - buttonMs) * buttonMs;

const allPossibilites: number[] = [];

for (const race of races) {
	const [raceTime, recordDistance] = race;

	let possibilities = 0;
	for (let i = 0; i <= raceTime; i++)
		if (recordDistance < calculateDistance(i, raceTime)) possibilities++;

	allPossibilites.push(possibilities);
}

console.log(product(allPossibilites));
