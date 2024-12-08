import {
	lines,
	loadData,
	newMatrix,
	enumerate,
	Coordinate,
	print,
	setValueAtCoords,
	valueAtCoord,
	isInBounds,
} from '@helper';
import { DIAGONAL_OFFSETS } from '@constants';

type NumberPair = [number, number];

const input = await loadData();
const matrix = lines(input.toUpperCase(), (l) => l.split(''));

const applyOffset = (
	{ row, col }: Coordinate,
	[colOffset, rowOffset]: NumberPair,
	count: number,
): Coordinate[] => {
	return Array.from({ length: count }, (_, i) => ({
		row: row + i * rowOffset,
		col: col + i * colOffset,
	}));
};

const wordSearch = (coordinate: Coordinate) => {
	return Object.values(DIAGONAL_OFFSETS)
		.map((offset) => {
			const offsetCoords = applyOffset(coordinate, offset, 'MAS'.length);
			const chars = offsetCoords
				.filter((coord) => isInBounds(matrix, coord))
				.map((coord) => valueAtCoord(matrix, coord) ?? '');
			return [chars.join(''), offsetCoords[1]] as const;
		})
		.filter(([w]) => w === 'MAS')
		.map(([_, aCoord]) => aCoord);
};

const allACoords = matrix.flatMap((line, row) => {
	const indecesOfM = enumerate(line)
		.filter(([char]) => char === 'M')
		.map(([_, index]) => index);
	return indecesOfM.flatMap((col) => wordSearch({ row, col }));
});

const crossA = allACoords.filter(({ row, col }) => {
	const existsMultipleTimes =
		allACoords.filter((c) => c.row === row && c.col === col).length > 1;
	return existsMultipleTimes;
});

if (Bun.env.DATA === 'debug') {
	const aMatrix = setValueAtCoords(
		newMatrix({ rows: matrix.length, cols: matrix[0].length }, '.'),
		crossA,
		'A',
	);
	console.log(print(aMatrix));
}

console.log(crossA.length / 2);
