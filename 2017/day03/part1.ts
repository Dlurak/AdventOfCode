import { loadData } from '@helper';

const input = await loadData().then((n) => parseInt(n));

const totalRingSize = (ring: number): number => {
	if (ring === 1) {
		return 1;
	}

	const kant = 1 + 2 * (ring - 1);
	return kant * 2 + (kant - 2) * 2 + totalRingSize(ring - 1);
};

const findRing = (num: number) => {
	let i = 1;
	while (totalRingSize(++i) < num) {}
	return i;
};

const relativeStart = (ring: number) => [ring - 1, (ring - 2) * -1] as const;

const position = (num: number): [number, number] => {
	const ring = findRing(num);
	const firstRingElePos = relativeStart(ring);
	const [x, y] = firstRingElePos;
	const kant = 1 + 2 * (ring - 1);

	const indexOnRing = num - totalRingSize(ring - 1) - 1;

	const directions: [number, number][] = [
		[0, 1],
		[-1, 0],
		[0, -1],
		[1, 0],
	];

	const result = directions.reduce<{
		position: [number, number];
		remaining: number;
	}>(
		({ position, remaining }, [deltaX, deltaY]) => {
			if (remaining === 0) {
				return { position, remaining };
			}

			const stepSize = kant - 1;
			const stepsToTake = Math.min(remaining, stepSize);

			return {
				position: [
					position[0] + deltaX * stepsToTake,
					position[1] + deltaY * stepsToTake,
				],
				remaining: remaining - stepsToTake,
			};
		},
		{ position: [x, y], remaining: indexOnRing },
	);

	return result.position;
};

const dist = (num: number) => {
	const [x, y] = position(num);
	return Math.abs(x) + Math.abs(y);
};

console.log(dist(input));
