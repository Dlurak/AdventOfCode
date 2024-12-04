import {
	lines,
	loadData,
	enumerate,
	mapValues,
	sumBy,
	Coordinate,
} from '@helper';
import { OFFSETS } from '@constants';

const input = await loadData();
const matrix = lines(input.toUpperCase(), (l) => l.split(''));

const getNeighbors = ({ row, col }: Coordinate) =>
	mapValues(OFFSETS, (offset) => {
		const [colOffset, rowOffset] = offset;
		return [(matrix[row + rowOffset] ?? [])[col + colOffset], offset] as const;
	});

const applyOffset = (
	{ row, col }: Coordinate,
	[colOffset, rowOffset]: [number, number],
	count: number,
): Coordinate[] => {
	return Array.from({ length: count }, (_, i) => ({
		row: row + i * rowOffset,
		col: col + i * colOffset,
	}));
};

const wordSearch = (coordinate: Coordinate, word: string = 'XMAS') => {
	const items = Object.values(getNeighbors(coordinate));
	const offsets = items.map(([_, offset]) => offset);

	const words = offsets.map((offset) => {
		return applyOffset(coordinate, offset, word.length)
			.map(({ row, col }) => (matrix[row] ?? [])[col] ?? '')
			.join('');
	});
	return words.filter((w) => w === word).length;
};

const result = sumBy(matrix, (line, row) => {
	const indecesOfX = enumerate(line)
		.filter(([char]) => char === 'X')
		.map(([_, index]) => index);

	return sumBy(indecesOfX, (col) => wordSearch({ row, col }, 'XMAS'));
});

console.log(result);
