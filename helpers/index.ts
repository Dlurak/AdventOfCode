import { mapToInt } from './int';
import { pair } from './pair';
import { enumerate } from './enumerate';
import { product } from './product';
import { highestBy } from './highest';
import { range, isInRange } from './range';
import { groupBy } from './groupBy';
import { median, average } from './medianAndAverage';
import { isPrime } from './isPrime';
import { lastElementOfList } from './last';
import { filterOutNaN, filterOut } from './filterOutNan';
import { replaceMultiple } from './replaceAll';
import { mapValues } from './objectMap';
import { getKeyByValue } from './getKeyByValue';
import { isNum, isDigit } from './isNum';
import { removeConsecutiveNumbers } from './removeConsecutiveNumbers';
import { findAllIndexes } from './findAllIndexes';
import { findDuplicates } from './findDuplicates';
import { lines } from './lines';
import { words } from './words';
export * from './loadData';
export * from './unique';
export * from './sum';
export * from './isSorted';
export * from './quickSelect';
export * from './removeDoubleWhitespaces';
export * from './transpose';
export * from './countGroups';
export * from './lcm';
export * from './mergeObjects';
export * from './matrix/getCoordinate';
export * from './matrix/getNextToCoordinate';
export * from './matrix/newMatrix';
export * from './matrix/types';
export * from './matrix/utils';
export * from './sort';
export * from './removeIndex';
export * from './deepEqual';
export * from './matrix/fill';
// TODO: Test set value at coord
export * from './matrix/setValueAtCoord';
export * from './commonChars';
export * from './chunkify';

export {
	mapToInt,
	product,
	range,
	isInRange,
	groupBy,
	median,
	average,
	isPrime,
	lastElementOfList,
	filterOutNaN,
	filterOut,
	replaceMultiple,
	mapValues,
	getKeyByValue,
	isNum,
	isDigit,
	removeConsecutiveNumbers,
	findAllIndexes,
	findDuplicates,
	enumerate,
	highestBy,
	pair,
	lines,
	words,
};
export const self = <T>(x: T) => x;
