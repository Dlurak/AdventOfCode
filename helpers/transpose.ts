type Matrix<T> = T[][];

/**
 * Transposes a matrix.
 *
 * @param matrix - The matrix to transpose.
 * @returns The transposed matrix.
 *
 * @example
 * const originalArray = [
 *   [7, 15, 30],
 *   [9, 40, 200]
 * ];
 * const transposedArray = transpose(originalArray);
 * // transposedArray is [[7, 9], [15, 40], [30, 200]]
 *
 * @example
 * const anotherArray = [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ];
 * const anotherTransposedArray = transpose(anotherArray);
 * // anotherTransposedArray is [[1, 4], [2, 5], [3, 6]]
 */
export const transpose = <T>(matrix: Matrix<T>) =>
	matrix[0].map((_, i) => matrix.map((row) => row[i]));
