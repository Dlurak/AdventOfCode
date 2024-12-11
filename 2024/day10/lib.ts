import type { Coordinate, Matrix } from '@helper';
import { valueAtCoord, applyOffset } from '@helper';
import { ORTHONAL_OFFSETS } from '@constants';

export const getFinalCoords = (
	matrix: Matrix<number>,
	coord: Coordinate,
): Coordinate[] => {
	const value = valueAtCoord(matrix, coord)!;
	if (value === 9) {
		return [coord];
	}

	const neighbooringOffsets = Object.values(ORTHONAL_OFFSETS);
	const neighbooringCoords = neighbooringOffsets
		.map((offset) => {
			const nextCoord = applyOffset(coord, offset);
			return [nextCoord, valueAtCoord(matrix, nextCoord)] as const;
		})
		.filter(([_, num]) => num === value + 1);

	return neighbooringCoords.flatMap(([c]) => getFinalCoords(matrix, c));
};
