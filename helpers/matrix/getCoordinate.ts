import { enumerate } from '../enumerate';

type Matrix<T> = T[][];

interface Coordinate {
	row: number;
	col: number;
}

/**
 * Finds the coordinates of a specific item in a matrix.
 * It will only find the first match
 *
 * @param matrix - The matrix to search in
 * @param target - The target to find.
 *
 * @returns The first match or null
 *
 * @example
 * ```TypeScript
 *  const matrix = [
 *   ['a', 'b', 'c'],
 *   ['d', 'e', 'f'],
 *   ['g', 'h', 'i']
 * ];
 * const targetItem = 'e';
 * findItemCoordinates(matrix, targetItem)
 * // row: 1, col: 1
 * ```
 */
export const findItemCoordinates = <T>(
	matrix: Matrix<T>,
	target: T,
): Coordinate | null => {
	for (let i = 0; i < matrix.length; i++)
		for (let j = 0; j < matrix[i].length; j++)
			if (matrix[i][j] === target)
				return {
					row: i,
					col: j,
				};

	return null;
};

export const findCoordinates = <T>(
	matrix: Matrix<T>,
	predicate: (val: T, coordinate: Coordinate) => boolean,
) => {
	return matrix.reduce<Coordinate[]>((acc, line, row) => {
		return [
			...acc,
			...enumerate(line)
				.filter(([val, col]) => predicate(val, { row: row, col }))
				.map(([_, col]) => ({ row: row, col })),
		];
	}, []);
};

export const applyOffset = (
	coordinate: Coordinate,
	[colOffset, rowOffset]: [number, number],
) => ({
	row: coordinate.row + rowOffset,
	col: coordinate.col + colOffset,
});
