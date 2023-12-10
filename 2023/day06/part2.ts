import { filterOutNaN, loadData } from '@helper';

const input = await loadData({
	part: 1,
	day: 6,
	year: 2023,
});

const race = filterOutNaN(
	input
		.replace(/[^0-9\n]/g, '')
		.split('\n')
		.map((l) => parseInt(l)),
);

const calculateDistance = (buttonMs: number, time: number) =>
	(time - buttonMs) * buttonMs;

const [raceTime, recordDistance] = race;

let possibilities = 0;
for (let i = 0; i <= raceTime; i++)
	if (recordDistance < calculateDistance(i, raceTime)) possibilities++;

console.log(possibilities);
