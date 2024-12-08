import type { Matrix, Coordinate } from './types';

/**
 * Sets the value at the specified coordinates in a matrix without mutating the original matrix.
 *
 * @param matrix - The matrix to be updated.
 * @param coord - The coordinates {row, col} where the value should be updated.
 * @param value - The new value to be set at the specified coordinates.
 * @throws Will throw an error if the coordinates are out of bounds.
 * @returns A new matrix with the updated value at the specified coordinates.
 *
 * @example
 * ```TypeScript
 * const myMatrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9],
 * ];
 *
 * const coordinates = { row: 1, col: 1 };
 * const newValue = 42;
 *
 * const updatedMatrix = setValueAtCord(myMatrix, coordinates, newValue);
 * console.log(updatedMatrix);
 * // Output: [[1, 2, 3], [4, 42, 6], [7, 8, 9]]
 *
 * console.log(myMatrix);
 * // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] (original matrix remains unchanged)
 * ```
 */
export const setValueAtCord = <T>(
	matrix: Matrix<T>,
	coord: Coordinate,
	value: T,
): Matrix<T> => {
	const { row, col } = coord;

	if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
		const newMatrix = matrix.map((row) => [...row]);

		newMatrix[row][col] = value;

		return newMatrix;
	} else throw new Error('Coordinates are out of bounds');
};

export const setValueAtCoords = <T>(
	matrix: Matrix<T>,
	coords: Coordinate[],
	value: T,
) => {
	return coords.reduce(
		(acc, aCoord) => setValueAtCord(acc, aCoord, value),
		matrix,
	);
};
