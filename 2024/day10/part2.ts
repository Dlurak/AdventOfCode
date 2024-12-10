import { mapToInt, lines, findCoordinates, loadData, sumBy } from '@helper';
import { getFinalCoords } from './lib';

const input = await loadData();
const matrix = lines(input, (l) => mapToInt(l.split('')));
const zeroCoords = findCoordinates(matrix, (num) => num === 0);

console.log(sumBy(zeroCoords, (coord) => getFinalCoords(matrix, coord).length));
