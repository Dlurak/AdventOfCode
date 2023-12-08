import { lcm, loadData } from '@helper';

const input = await loadData({
	part: 2,
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

const getSteps = (start: string) => {
	let current = start;
	let steps = 0;

	while (!current.endsWith('Z')) {
		for (const direction of directions.split('')) {
			current = getNextNode(current, direction === 'L' ? 'left' : 'right');
			steps++;

			if (current.endsWith('Z')) break;
		}
	}

	return steps;
};

const startNodes = nodes.map((n) => n.start).filter((n) => n.endsWith('A'));
const steps = startNodes.map((cn) => getSteps(cn));

console.log(lcm(steps));
