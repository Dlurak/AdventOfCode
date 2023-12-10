import {
	findItemCoordinates,
	getneighboringItems,
	loadData,
	unique,
} from '@helper';

interface Coordinate {
	row: number;
	col: number;
}

const NORTH_CONNECTING = ['|', 'L', 'J'];
const SOUTH_CONNECTING = ['|', 'F', '7'];
const EAST_CONNECTING = ['-', 'F', 'L'];
const WEST_CONNECTING = ['-', 'J', '7'];

const input = await loadData({
	part: 1,
	day: 10,
	year: 2023,
});
const matrix = input
	.split('\n')
	.map((it) => it.split(''))
	.slice(0, -1);

const sCoordinate = findItemCoordinates(matrix, 'S');
if (!sCoordinate) throw new Error("Input doesn't include a S");

const getPossibleCoordinates = (start: Coordinate) => {
	const { top, bottom, left, right } = getneighboringItems(matrix, start);
	const correctCoordinates: Coordinate[] = [];

	if (SOUTH_CONNECTING.includes(top ?? ''))
		correctCoordinates.push({
			row: start.row - 1,
			col: start.col,
		});

	if (NORTH_CONNECTING.includes(bottom ?? ''))
		correctCoordinates.push({
			row: start.row + 1,
			col: start.col,
		});

	if (EAST_CONNECTING.includes(left ?? ''))
		correctCoordinates.push({
			row: start.row,
			col: start.col - 1,
		});

	if (WEST_CONNECTING.includes(right ?? ''))
		correctCoordinates.push({
			row: start.row,
			col: start.col + 1,
		});

	return correctCoordinates;
};

let distance = 0;
const visitedCoordinates = [{ ...sCoordinate, distance }];
let currentCoordinates = [sCoordinate];

while (
	!currentCoordinates
		.map((co) => getPossibleCoordinates(co))
		.flat()
		.every((coordinate) =>
			visitedCoordinates.some(
				(visitedCoord) =>
					visitedCoord.row === coordinate.row &&
					visitedCoord.col === coordinate.col,
			),
		)
) {
	distance++;

	const newCoordinates = unique(
		currentCoordinates.map((co) => getPossibleCoordinates(co)).flat(),
	).filter(
		(co) =>
			!visitedCoordinates.some(
				(vCo) => vCo.row === co.row && vCo.col === co.col,
			),
	);
	currentCoordinates = newCoordinates;

	currentCoordinates.forEach((c) =>
		visitedCoordinates.push({ ...c, distance }),
	);
}

const distances = visitedCoordinates.map((c) => c.distance);
console.log(Math.max(...distances));
