import {
	Coordinate,
	Matrix,
	applyOffset,
	isInBounds,
	setValueAtCord,
	valueAtCoord,
} from '@helper';
import { ORTHONAL_OFFSETS } from '@constants';

export const floodFill = <T>(
	matrix: Matrix<T>,
	coord: Coordinate,
	newValue: T,
) => {
	if (!isInBounds(matrix, coord)) {
		return matrix;
	}
	const startValue = valueAtCoord(matrix, coord)!;
	if (startValue === newValue) {
		return matrix;
	}

	const fill = (
		matrix: Matrix<T>,
		coord: Coordinate,
	): Matrix<T> | undefined => {
		if (!isInBounds(matrix, coord)) {
			return;
		}
		if (valueAtCoord(matrix, coord) !== startValue) {
			return;
		}

		return Object.values(ORTHONAL_OFFSETS).reduce(
			(acc, offset) => {
				return fill(acc, applyOffset(coord, offset)) ?? acc;
			},
			setValueAtCord(matrix, coord, newValue),
		);
	};

	return fill(matrix, coord);
};

export const getFloodFillCoordinates = <T>(
	matrix: Matrix<T>,
	coord: Coordinate,
): Coordinate[] => {
	if (!isInBounds(matrix, coord)) {
		return [];
	}
	const startValue = valueAtCoord(matrix, coord);
	if (startValue === undefined) {
		return [];
	}

	const visited = new Set<string>();
	const result: Coordinate[] = [];

	const coordToString = ({ col, row }: Coordinate) => `${col}|${row}`;

	const fill = (coord: Coordinate) => {
		if (!isInBounds(matrix, coord)) {
			return;
		}
		if (valueAtCoord(matrix, coord) !== startValue) {
			return;
		}
		const coordKey = coordToString(coord);
		if (visited.has(coordKey)) {
			return;
		}

		visited.add(coordKey);
		result.push(coord);

		for (const offset of Object.values(ORTHONAL_OFFSETS)) {
			fill(applyOffset(coord, offset));
		}
	};

	fill(coord);
	return result;
};
