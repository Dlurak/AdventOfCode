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
