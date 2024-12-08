import {
	loadData,
	applyOffset,
	Coordinate,
	findItemCoordinates,
	lines,
	setValueAtCord,
	uniqueBy,
	valueAtCoord,
} from '@helper';
import { nextDirection, offsetForDirection, walk } from './lib';

type Direction = 'up' | 'down' | 'right' | 'left';

const input = await loadData();
const matrix = lines(input, (l) => l.split('') as ('#' | '.' | '^')[]);

const hasLoop = (
	matrix: string[][],
	current: Coordinate,
	currentDirection: Direction,
	visited = new Set<string>(),
): boolean => {
	const state = `${current.row},${current.col},${currentDirection}`;
	if (visited.has(state)) {
		return true;
	}
	visited.add(state);

	const potentialStep = applyOffset(
		current,
		offsetForDirection(currentDirection),
	);
	const valueAtNextStep = valueAtCoord(matrix, potentialStep);

	if (!valueAtNextStep) {
		return false;
	}

	const direction =
		valueAtNextStep === '#'
			? nextDirection(currentDirection)
			: currentDirection;

	return hasLoop(
		matrix,
		valueAtNextStep === '#' ? current : potentialStep,
		direction,
		visited,
	);
};

const obstacleCoordinates = uniqueBy(
	walk(matrix, findItemCoordinates(matrix, '^')!, 'up').map(
		([coord, direction]) => {
			return applyOffset(coord, offsetForDirection(direction));
		},
	),
	(a, b) => a.col === b.col && a.row === b.row,
);

const loopingMatrixes = obstacleCoordinates.filter((obstacleCord) => {
	try {
		const newMatrix = setValueAtCord(matrix, obstacleCord, '#');

		const loopFound = hasLoop(
			newMatrix,
			findItemCoordinates(newMatrix, '^')!,
			'up',
		);
		return loopFound;
	} catch {
		return false;
	}
});

console.log(loopingMatrixes.length);
