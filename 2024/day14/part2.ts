import {
	loadData,
	newMatrix,
	print,
	setValueAtCoords,
	showVisualization,
	count,
} from '@helper';
import { Robot, parse, newPosition } from './lib';

const input = await loadData();
const { robots, spaceWidth, spaceHeight } = parse(input);

const countAdjacentRobots = (robots: Robot[], countOfRobots: number) => {
	const groups = robots
		.reduce((acc, { pos }) => {
			if (!acc.has(pos.row)) {
				acc.set(pos.row, []);
			}
			acc.get(pos.row)!.push(pos.col);
			return acc;
		}, new Map<number, number[]>())
		.values();

	return count(Array.from(groups), (cols) => {
		const sortedCols = cols.toSorted((a, b) => a - b);

		const consecutiveCounts = sortedCols.reduce((acc, curr, index) => {
			if (index === 0 || curr !== sortedCols[index - 1] + 1) {
				acc.push(1);
			} else {
				acc[acc.length - 1] += 1;
			}
			return acc;
		}, [] as number[]);

		return consecutiveCounts.some((countInSeq) => countInSeq >= countOfRobots);
	});
};

const solve = (robots: Robot[], i = 0): [number, Robot[]] => {
	// The tree is framed => at the top and bottom many next to each other
	if (countAdjacentRobots(robots, 31) === 2) {
		return [i, robots];
	}

	return solve(
		robots.map((r) => ({
			pos: newPosition(r, spaceWidth, spaceHeight),
			velocity: r.velocity,
		})),
		i + 1,
	);
};

const [i, newRobots] = solve(robots);

console.log(i);
if (showVisualization()) {
	const visualized = setValueAtCoords(
		newMatrix({ cols: spaceWidth, rows: spaceHeight }, ' '),
		newRobots.map(({ pos }) => pos),
		'#',
	);

	console.log(print(visualized));
}
