export interface Coordinate {
	row: number;
	col: number;
}

type Neighbors<T> = {
	top: T | undefined;
	bottom: T | undefined;
	left: T | undefined;
	right: T | undefined;
};

type Matrix<T> = T[][];

export const getneighboringItems = <T>(
	matrix: Matrix<T>,
	coordinate: Coordinate,
): Neighbors<T> => {
	const { row, col } = coordinate;

	const top = (matrix[row - 1] ?? [])[col];
	const bottom = (matrix[row + 1] ?? [])[col];
	const left = (matrix[row] ?? [])[col - 1];
	const right = (matrix[row] ?? [])[col + 1];

	return { top, bottom, left, right };
};
