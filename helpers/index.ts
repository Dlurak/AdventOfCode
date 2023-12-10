import { mapToInt } from './int';
import { sum } from './sum';
import { product } from './product';
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
export * from './removeDoubleWhitespaces';
export * from './transpose';
export * from './countGroups';
export * from './lcm';
export * from './matrix/getCoordinate';
export * from './matrix/getNextToCoordinate';
export * from './matrix/newMatrix';
// TODO: Test set value at coord
export * from './matrix/setValueAtCoord';

export {
	loadData,
	mapToInt,
	sum,
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
};
