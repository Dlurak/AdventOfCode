import { loadData, mapToInt, sumBy } from '@helper';

const input = await loadData();

type Color = 'red' | 'green' | 'blue';

const getNumberForColor = (game: string, color: Color) => {
	const matches = game.match(new RegExp(`\\d+ ${color}`, 'g')) ?? [];
	return Math.max(...mapToInt(matches.map((m) => m.split(' ')[0])));
};

const pointsForGame = (game: string) => {
	const red = getNumberForColor(game, 'red') <= 12;
	const green = getNumberForColor(game, 'green') <= 13;
	const blue = getNumberForColor(game, 'blue') <= 14;

	const isPossible = red && green && blue;
	if (!isPossible) {
		return 0;
	}

	return parseInt((game.match(/(\d)+/) ?? ['0'])[0]);
};

const lines = input.split('\n').filter((l) => l.trim() !== '');

console.log(sumBy(lines, pointsForGame));
