import {
	getneighboringItems,
	lines,
	loadData,
	sumBy,
	valueAtCoord,
} from '@helper';
import { generateGroups } from './lib';

const input = await loadData();
const matrix = lines(input, (l) => l.split(''));
const regions = generateGroups(matrix);

const regionPerimeter = (region: Set<string>) => {
	const coords = [...region].map((str) => {
		const [colStr, rowStr] = str.split('|', 2);
		return { col: parseInt(colStr), row: parseInt(rowStr) };
	});
	const value = valueAtCoord(matrix, coords[0]);
	return sumBy(coords, (c) => {
		const neighboringValues = Object.values(getneighboringItems(matrix, c));
		return neighboringValues.filter((v) => v !== value).length;
	});
};

console.log(sumBy(regions, (r) => regionPerimeter(r) * r.size));
