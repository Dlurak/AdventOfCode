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
import { numToStr } from './numToStr';
import { filterOutNaN, filterOut } from './filterOutNan';
import { loadData } from './loadData';
import { replaceMultiple } from './replaceAll';
import { mapValues } from './objectMap';
import { getKeyByValue } from './getKeyByValue';
import { unique } from './unique';
import { isNum, isDigit } from './isNum';
import { removeConsecutiveNumbers } from './removeConsecutiveNumbers';
import { findAllIndexes } from './findAllIndexes';
import { findDuplicates } from './findDuplicates';
import { lines } from './lines';
import { words } from './words';
export * from './sum';
export * from './removeDoubleWhitespaces';
export * from './transpose';
export * from './countGroups';
export * from './lcm';
export * from './matrix/getCoordinate';
export * from './matrix/getNextToCoordinate';
export * from './matrix/newMatrix';
export * from './sort';
// TODO: Test set value at coord
export * from './matrix/setValueAtCoord';
export * from './commonChars';
export * from './chunkify';

export {
	loadData,
	mapToInt,
	product,
	range,
	isInRange,
	groupBy,
	median,
	average,
	isPrime,
	lastElementOfList,
	numToStr,
	filterOutNaN,
	filterOut,
	replaceMultiple,
	mapValues,
	getKeyByValue,
	unique,
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
