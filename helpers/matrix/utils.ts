import { Coordinate, Matrix, applyOffset, uniqueBy } from '@helper';
import { Offset } from '@constants';

export const print = <T>(
	matrix: Matrix<T>,
	mergeLine: (line: T[]) => string = (line) => line.join(''),
) => matrix.map(mergeLine).join('\n');

export const isInBounds = (matrix: Matrix<unknown>, { row, col }: Coordinate) =>
	row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length;

export const uniqueCoords = (coords: Coordinate[]) =>
	uniqueBy(coords, (a, b) => a.col === b.col && a.row === b.row);

export const valueAtCoord = <T>(
	matrix: Matrix<T>,
	{ row, col }: Coordinate,
): T | undefined => (matrix[row] ?? [])[col];

export const findByOffset = <T>(
	matrix: Matrix<T>,
	offset: Offset,
	start: Coordinate,
	predicate: (value: T, coordinate: Coordinate, next: T | undefined) => boolean,
): { value: T; coord: Coordinate } | null => {
	if (!isInBounds(matrix, start)) {
		return null;
	}

	const value = valueAtCoord(matrix, start)!;
	const nextCoord = applyOffset(start, offset);
	if (predicate(value, start, valueAtCoord(matrix, nextCoord))) {
		return { value, coord: start };
	}

	return findByOffset(matrix, offset, nextCoord, predicate);
};
