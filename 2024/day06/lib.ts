import { applyOffset, Coordinate } from '@helper';
import { ORTHONAL_OFFSETS } from '@constants';

export type Direction = 'up' | 'down' | 'right' | 'left';

export const nextDirection = (direction: Direction): Direction => {
	const mappings: Record<Direction, Direction> = {
		up: 'right',
		right: 'down',
		down: 'left',
		left: 'up',
	};
	return mappings[direction];
};

export const offsetForDirection = (direction: Direction) =>
	({
		up: ORTHONAL_OFFSETS.bottom,
		down: ORTHONAL_OFFSETS.top,
		left: ORTHONAL_OFFSETS.left,
		right: ORTHONAL_OFFSETS.right,
	})[direction];

export const walk = (
	matrix: string[][],
	current: Coordinate,
	currentDirection: Direction,
): [Coordinate, Direction][] => {
	const potentialStep = applyOffset(
		current,
		offsetForDirection(currentDirection),
	);
	const valueAtNextStep = (matrix[potentialStep.row] ?? [])[potentialStep.col];

	if (!valueAtNextStep) {
		return [[current, currentDirection]];
	}

	const direction =
		valueAtNextStep === '#'
			? nextDirection(currentDirection)
			: currentDirection;

	const walked = walk(
		matrix,
		valueAtNextStep === '#' ? current : potentialStep,
		direction,
	);

	return [[current, direction], ...walked];
};
