import { lines, loadData, mapToInt, sumBy } from '@helper';

const input = await loadData();

const parse = (input: string) => {
	const [rulesString, instructionsString] = input.split('\n\n', 2);
	const rules = lines(
		rulesString,
		(l) => mapToInt(l.split('|', 2)) as [number, number],
	);
	const instructions = lines(instructionsString, (l) => mapToInt(l.split(',')));
	return { rules, instructions };
};

const { rules, instructions } = parse(input);

const resort = (instruction: number[]): number[] => {
	const copiedInstruction = instruction.slice();
	const { invalidIndex, lastValidIndex } = copiedInstruction.reduce(
		(acc, page, i, arr) => {
			if (acc.invalidIndex !== -1) {
				return acc;
			}

			const followingPages = arr.slice(i + 1);
			const toEarlyNumberIndex = followingPages.findIndex((p) => {
				return rules.some(([r1, r2]) => r1 === p && r2 === page);
			});

			if (toEarlyNumberIndex !== -1) {
				const invalidIndex = toEarlyNumberIndex + i + 1;
				return { ...acc, invalidIndex };
			}

			return { ...acc, lastValidIndex: i };
		},
		{ invalidIndex: -1, lastValidIndex: -1 },
	);

	if (invalidIndex === -1) {
		return copiedInstruction;
	}

	// Doing it with slicing is very slow. We need splice (unpure)
	const elementToMove = copiedInstruction.splice(invalidIndex, 1)[0];
	copiedInstruction.splice(lastValidIndex + 1, 0, elementToMove);

	return resort(copiedInstruction);
};

const result = sumBy(
	instructions
		.map((instruction) => {
			const resorted = resort(instruction);
			const isModified = instruction.join(',') !== resorted.join(',');
			return [resorted, isModified] as const;
		})
		.filter(([_, isModified]) => isModified),
	([instruction]) => instruction[(instruction.length - 1) / 2],
);

console.log(result);
