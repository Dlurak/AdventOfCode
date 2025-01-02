import { Offset } from '@constants';
import { Coordinate, mapToInt, lines, applyOffset } from '@helper';

export type Robot = { pos: Coordinate; velocity: Offset };
export const parse = (input: string) => {
	const robots = lines(input, (l): Robot => {
		const [_, pxStr, pyStr, vx, vy] =
			/p=(-?\d+),(-?\d+) v=(-?\d+),(-?\d+)/.exec(l)!;
		const [px, py] = mapToInt([pxStr, pyStr]);
		return {
			pos: { row: py, col: px },
			velocity: mapToInt([vx, vy]) as Offset,
		};
	});
	const spaceWidth = Math.max(...robots.map(({ pos: { col } }) => col)) + 1;
	const spaceHeight = Math.max(...robots.map(({ pos: { row } }) => row)) + 1;
	return { robots, spaceWidth, spaceHeight };
};

export const newPosition = (
	{ pos, velocity }: Robot,
	spaceWidth: number,
	spaceHeight: number,
) => {
	const moved = applyOffset(pos, velocity);

	return {
		col: (moved.col + spaceWidth) % spaceWidth,
		row: (moved.row + spaceHeight) % spaceHeight,
	};
};
