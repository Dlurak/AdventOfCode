import { Pair, isInRange, loadData, product, count } from '@helper';
import { Robot, newPosition, parse } from './lib';

const input = await loadData();
const { robots, spaceHeight, spaceWidth } = parse(input);

const moveRobot = (robot: Robot, count = 100): Robot => {
	if (count === 0) {
		return robot;
	}

	return {
		pos: newPosition(moveRobot(robot, count - 1), spaceWidth, spaceHeight),
		velocity: robot.velocity,
	};
};

const movedRobots = robots.map((r) => moveRobot(r));

const quadrantWidth = (spaceWidth - 1) / 2;
const quadrantHeight = (spaceHeight - 1) / 2;
const quadrants: Pair<Pair<number>>[] = [
	[
		[0, quadrantWidth - 1],
		[0, quadrantHeight - 1],
	],
	[
		[quadrantWidth + 1, spaceWidth - 1],
		[0, quadrantHeight - 1],
	],

	[
		[0, quadrantWidth - 1],
		[quadrantHeight + 1, spaceHeight - 1],
	],
	[
		[quadrantWidth + 1, spaceWidth - 1],
		[quadrantHeight + 1, spaceHeight - 1],
	],
];

const quadrantCounts = quadrants.map((quadrant) => {
	return count(movedRobots, ({ pos }) => {
		return (
			isInRange(quadrant[0][0], pos.col, quadrant[0][1]) &&
			isInRange(quadrant[1][0], pos.row, quadrant[1][1])
		);
	});
});

console.log(product(quadrantCounts));
