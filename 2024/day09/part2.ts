import { loadData, mapToInt, showVisualization } from '@helper';
import { calcChecksum } from './lib';

const input = await loadData();
const parsedSizes = mapToInt(input.split(''));
const files = parsedSizes.map((size, index) => {
	const id = index % 2 ? null : Math.floor(index / 2);
	return { size, id };
});
/* This is a parser for part1
 * eventhough this algorithm is optimized on part 2 it can also solve part 1
 * ...double as fast as the designated part 1 algorithm
 *
const files = parsedSizes.flatMap((size, index) => {
	const id = index % 2 ? null : Math.floor(index / 2);
	return Array.from({ length: size }, () => ({ size: 1, id }));
});
*/

type Group = (typeof files)[number];

const moveNum = (array: Group[]) => {
	const appendix: Group[] = [];
	while (array.length > 0) {
		const last = array.pop();
		if (!last) {
			break;
		}

		if (last.id === null) {
			appendix.push(last);
			continue;
		}
		const nullIndex = array.findIndex(
			({ id, size }) => id === null && size >= last.size,
		);
		if (nullIndex === -1) {
			appendix.push(last);
			continue;
		}

		if (array[nullIndex].size !== last.size) {
			array.splice(nullIndex + 1, 0, {
				size: array[nullIndex].size - last.size,
				id: null,
			});
		}
		array[nullIndex] = last;
		appendix.push({ id: null, size: last.size });
	}

	return appendix.reverse();
};

const movedFiles = moveNum(files);

if (showVisualization()) {
	console.log(
		movedFiles
			.map(({ id, size }) => {
				const string = id === null ? '.' : `${id}`;
				return string.repeat(size);
			})
			.join('|'),
	);
}

const numbers = movedFiles.flatMap(({ id, size }) =>
	Array.from({ length: size }, () => id!),
);
console.log(calcChecksum(numbers));
