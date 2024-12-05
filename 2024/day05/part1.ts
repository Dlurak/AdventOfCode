import { isSorted, lines, loadData, mapToInt, sumBy } from '@helper';

const input = await loadData();

const parse = (input: string) => {
	const [rulesString, instructionsString] = input.split('\n\n', 2);

	const rules = lines(rulesString, (l) => mapToInt(l.split('|', 2)));

	return {
		instructions: lines(instructionsString, (l) => mapToInt(l.split(','))),
		rulesGraph: rules.reduce<Record<number, number[]>>(
			(acc, [r1, r2]) => ({
				...acc,
				[r1]: [...(acc[r1] ?? []), r2],
			}),
			{},
		),
	};
};

const { instructions, rulesGraph } = parse(input);

const isCorrectlySorted = (instruction: number[]) => {
	return isSorted(instruction, (a, b) => {
		if ((rulesGraph[a] ?? []).includes(b)) {
			return -1;
		}
		if ((rulesGraph[b] ?? []).includes(a)) {
			return 1;
		}
		return 0;
	});
};

console.log(
	sumBy(
		instructions.filter(isCorrectlySorted),
		(instruction) => instruction[(instruction.length - 1) / 2],
	),
);
