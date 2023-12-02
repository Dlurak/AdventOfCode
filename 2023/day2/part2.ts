import { loadData, product, sum } from '@helper';

const input = await loadData({
	part: 2,
	day: 2,
	year: 2023,
});

const colors = ['red', 'green', 'blue'] as const;
type Color = (typeof colors)[number];

const pointsForGame = (game: string) => {
	const subsets = (game.match(/((\d)+ (blue|red|green)(, )?)+/g) || []).map(
		(s) => s.split(', '),
	);

	const minimum: Record<Color, number> = { red: 0, green: 0, blue: 0 };

	for (const subset of subsets)
		for (const cube of subset) {
			const color = cube.split(' ')[1] as Color;

			minimum[color] = Math.max(minimum[color], parseInt(cube.split(' ')[0]));
		}

	return product(Object.values(minimum));
};

const lines = input.split('\n').filter((l) => l.trim() !== '');
const points = lines.map((l) => pointsForGame(l));
console.log(sum(points));
