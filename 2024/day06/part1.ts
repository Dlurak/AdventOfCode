import {
	loadData,
	findItemCoordinates,
	lines,
	uniqueBy,
	setValueAtCord,
	print,
} from '@helper';
import { walk } from './lib';

const input = await loadData();
const matrix = lines(input, (l) => l.split('') as ('#' | '.' | '^')[]);

const uniqueCoords = uniqueBy(
	walk(matrix, findItemCoordinates(matrix, '^')!, 'up'),
	([a], [b]) => a.col === b.col && a.row === b.row,
);

if (Bun.env.DATA === 'debug') {
	const stringMatrix = uniqueCoords.reduce<string[][]>(
		(acc, [coord, dir]) =>
			setValueAtCord(
				acc,
				coord,
				{ up: '↑', down: '↓', left: '←', right: '→' }[dir],
			),
		matrix,
	);
	console.log(print(stringMatrix));
}

console.log(uniqueCoords.length);
