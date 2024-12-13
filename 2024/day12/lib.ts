import type { Coordinate, Matrix } from '@helper';
import { getFloodFillCoordinates, range, valueAtCoord } from '@helper';

type Groups = Record<string, Set<string>[]>;

const addToGroup = (
	matrix: Matrix<string>,
	groups: Groups,
	coord: Coordinate,
) => {
	const value = valueAtCoord(matrix, coord)!;

	const setExists = groups[value]?.some((set) =>
		set.has(`${coord.col}|${coord.row}`),
	);
	if (setExists) {
		return;
	}

	const filledCoords = getFloodFillCoordinates(matrix, coord).map(
		({ col, row }) => `${col}|${row}`,
	);

	if (!groups[value]) {
		groups[value] = [new Set(filledCoords)];
		return;
	}
	if (!setExists) {
		groups[value].push(new Set(filledCoords));
		return;
	}
};

export const generateGroups = (matrix: Matrix<string>) => {
	let groups: Record<string, Set<string>[]> = {};

	for (const row of range(matrix.length)) {
		for (const col of range(matrix[row].length)) {
			const coord = { row, col };
			addToGroup(matrix, groups, coord);
		}
	}

	return Object.values(groups).flat()
};
