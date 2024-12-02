import { lines, loadData, product, self, sumBy } from '@helper';

type Color = 'red' | 'green' | 'blue';

const input = await loadData();

const parseSubset = (subset: string): { number: number; color: Color }[] =>
	subset.split(', ').map((entry) => {
		const [numberStr, colorStr] = entry.split(' ');
		return { number: parseInt(numberStr), color: colorStr as Color };
	});

const getMinimums = (subsets: ReturnType<typeof parseSubset>[]) => {
	return subsets.reduce<Record<Color, number>>(
		(prev, subset) => {
			return subset.reduce(
				(prev, { number, color }) => ({
					...prev,
					[color]: Math.max(prev[color], number),
				}),
				prev,
			);
		},
		{ red: 0, green: 0, blue: 0 },
	);
};

const pointsForGame = (game: string) => {
	const subsetMatches = game.match(/((\d)+ (blue|red|green)(, )?)+/g) || [];
	const subsets = subsetMatches.map(parseSubset);

	return product(Object.values(getMinimums(subsets)));
};

console.log(sumBy(lines(input, self), pointsForGame));
