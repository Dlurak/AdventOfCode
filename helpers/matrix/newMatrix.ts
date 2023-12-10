import type { Matrix } from './types';

interface Size {
	rows: number;
	cols: number;
}

/**
 * Creates a new matrix with the specified size and fills it with the provided value.
 *
 * @param size - The size of the matrix, specified by the number of rows and columns.
 * @param fill - The value to fill the matrix with.
 * @returns A new matrix of the specified size filled with the provided value.
 *
 * @example
 * ```TypeScript
 * // Create a 3x3 matrix filled with zeros
 * const zeroMatrix = newMatrix({ rows: 3, cols: 3 }, 0);
 *
 * // Create a 2x4 matrix filled with 'X'
 * const xMatrix = newMatrix({ rows: 2, cols: 4 }, 'X');
 * ```
 */
export const newMatrix = <T>(size: Size, fill: T): Matrix<T> =>
	new Array(size.rows).fill(new Array(size.cols).fill(fill));
