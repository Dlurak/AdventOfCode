import {
	Coordinate,
	applyOffset,
	enumerate,
	lines,
	loadData,
	setValueAtCord,
	sumBy,
} from '@helper';
import { ORTHONAL_OFFSETS } from '../../constants/offset';

const input = await loadData();
const matrix = lines(input, (l) => l.split(''));

const stoneCoords = matrix.reduce<Coordinate[]>((acc, line, row) => {
	return [
		...acc,
		...enumerate(line)
			.filter(([char]) => char === 'O')
			.map(([_, col]) => ({ row: row, col })),
	];
}, []);

const rollStone = (
	matrix: string[][],
	coord: Coordinate,
	offset: [number, number],
) => {
	let okCoord = coord;
	while (true) {
		const nextCoord = applyOffset(okCoord, offset);
		const nextValue = (matrix[nextCoord.row] ?? [])[nextCoord.col];
		if (nextValue === '.') {
			okCoord = nextCoord;
		} else {
			break;
		}
	}

	return setValueAtCord(setValueAtCord(matrix, coord, '.'), okCoord, 'O');
};

const newMatrix = stoneCoords.reduce(
	(acc, coord) => rollStone(acc, coord, ORTHONAL_OFFSETS.bottom),
	matrix,
);

console.log(
	sumBy(newMatrix, (line, i) => {
		const stoneCount = line.filter((c) => c === 'O').length;
		return stoneCount * (matrix.length - i);
	}),
);
