import { loadData, sum } from '@helper';

const input = await loadData({
	part: 1,
	day: 2,
	year: 2023,
});

const constraints = {
	red: 12,
	green: 13,
	blue: 14,
};
type Color = keyof typeof constraints;

const pointsForGame = (game: string) => {
	const subsets = (game.match(/((\d)+ (blue|red|green)(, )?)+/g) || []).map(
		(s) => s.split(', '),
	);

	for (const subset of subsets)
		for (const cube of subset)
			if (
				parseInt(cube.split(' ')[0]) > constraints[cube.split(' ')[1] as Color]
			)
				return 0;

	// @ts-expect-error No need to validate the aoc input
	return parseInt(game.match(/(\d)+/)[0]);
};

const lines = input.split('\n').filter((l) => l.trim() !== '');
const points = lines.map((l) => pointsForGame(l));
console.log(sum(points));
