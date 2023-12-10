import { loadData } from '@helper';

const input = await loadData({
	part: 1,
	day: 8,
	year: 2023,
});
const blocks = input.split('\n\n');

const directions = blocks[0];
const nodes = blocks[1]
	.slice(0, -1)
	.split('\n')
	.map((l) => l.match(/[A-Z]{3}/g) ?? [])
	.map(([start, left, right]) => ({
		start,
		left,
		right,
	}));

const getNextNode = (currentNode: string, direction: 'left' | 'right') => {
	const startNode = nodes.find(({ start }) => start === currentNode);
	if (!startNode) throw new Error('Invalid input');

	return startNode[direction];
};

let currentNode = 'AAA';
let steps = 0;

while (currentNode !== 'ZZZ') {
	for (const direction of directions.split('')) {
		currentNode = getNextNode(
			currentNode,
			direction === 'L' ? 'left' : 'right',
		);
		steps++;
	}
}

console.log(steps);
