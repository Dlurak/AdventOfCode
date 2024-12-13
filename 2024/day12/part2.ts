import { OFFSETS } from '@constants';
import {
	Coordinate,
	applyOffset,
	lines,
	loadData,
	sumBy,
	valueAtCoord,
} from '@helper';
import { generateGroups } from './lib';

const input = await loadData();
const matrix = lines(input, (l) => l.split(''));
const regions = generateGroups(matrix);

const innerCornerCounts = (coords: Coordinate[], value: string) => {
	const offsets = [
		[OFFSETS.top, OFFSETS.left, OFFSETS.topLeft],
		[OFFSETS.top, OFFSETS.right, OFFSETS.topRight],
		[OFFSETS.bottom, OFFSETS.left, OFFSETS.bottomLeft],
		[OFFSETS.bottom, OFFSETS.right, OFFSETS.bottomRight],
	];

	return sumBy(coords, (coord) => {
		return offsets.filter(([off1, off2, off3]) => {
			return (
				valueAtCoord(matrix, applyOffset(coord, off1)) === value &&
				valueAtCoord(matrix, applyOffset(coord, off2)) === value &&
				valueAtCoord(matrix, applyOffset(coord, off3)) !== value
			);
		}).length;
	});
};

const outerCornerCounts = (coords: Coordinate[], value: string) => {
	const offsets = [
		[OFFSETS.top, OFFSETS.left],
		[OFFSETS.top, OFFSETS.right],
		[OFFSETS.bottom, OFFSETS.left],
		[OFFSETS.bottom, OFFSETS.right],
	];
	return sumBy(coords, (coord) => {
		return offsets.filter(([off1, off2]) => {
			return (
				valueAtCoord(matrix, applyOffset(coord, off1)) !== value &&
				valueAtCoord(matrix, applyOffset(coord, off2)) !== value
			);
		}).length;
	});
};

const sidesOfRegion = (region: Set<string>) => {
	const coords = [...region].map((str) => {
		const [colStr, rowStr] = str.split('|', 2);
		return { col: parseInt(colStr), row: parseInt(rowStr) };
	});
	const value = valueAtCoord(matrix, coords[0])!;

	return outerCornerCounts(coords, value) + innerCornerCounts(coords, value);
};

console.log(sumBy(regions, (r) => sidesOfRegion(r) * r.size));
