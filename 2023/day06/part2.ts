import { lines, loadData } from '@helper';

const input = await loadData();
const race = lines(input, (l) => parseInt(l.replace(/[^0-9]/g, '')));

const calculateDistance = (buttonMs: number, time: number) =>
	(time - buttonMs) * buttonMs;

const [raceTime, recordDistance] = race;

let possibilities = 0;
for (let i = 0; i <= raceTime; i++) {
	if (recordDistance < calculateDistance(i, raceTime)) possibilities++;
}

console.log(possibilities);
