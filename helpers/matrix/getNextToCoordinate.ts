import { Coordinate, Matrix } from './types';
import { valueAtCoord } from './utils';

type Neighbors<T> = {
	top: T | undefined;
	bottom: T | undefined;
	left: T | undefined;
	right: T | undefined;
};

export const getneighboringItems = <T>(
	matrix: Matrix<T>,
	coordinate: Coordinate,
): Neighbors<T> => {
	const { row, col } = coordinate;

	const top = valueAtCoord(matrix, { row: row - 1, col });
	const bottom = valueAtCoord(matrix, { row: row + 1, col });
	const left = valueAtCoord(matrix, { row, col: col - 1 });
	const right = valueAtCoord(matrix, { row, col: col + 1 });

	return { top, bottom, left, right };
};
