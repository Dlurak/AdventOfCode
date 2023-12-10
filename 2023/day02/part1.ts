import { loadData, mapToInt, sum } from '@helper';

const input = await loadData({
	part: 1,
	day: 2,
	year: 2023,
});

type Color = 'red' | 'green' | 'blue';

const getNumberForColor = (game: string, color: Color) => {
	const regex = new RegExp(`\\d+ ${color}`, 'g');
	const matches = game.match(regex) ?? [];
	return Math.max(...mapToInt(matches.map((m) => m.split(' ')[0])));
};

const pointsForGame = (game: string) => {
	const red = getNumberForColor(game, 'red') <= 12;
	const green = getNumberForColor(game, 'green') <= 13;
	const blue = getNumberForColor(game, 'blue') <= 14;

	if (red && green && blue) return parseInt((game.match(/(\d)+/) ?? ['0'])[0]);

	return 0;
};

const lines = input.split('\n').filter((l) => l.trim() !== '');
const points = lines.map((l) => pointsForGame(l));
console.log(sum(points));
