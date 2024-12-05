import { lines, loadData, mapToInt, sumBy } from '@helper';

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
	return instruction.every((page, i) => {
		const followingPages = instruction.slice(i + 1);
		return followingPages.every((p) => rulesGraph[page].includes(p));
	});
};

console.log(
	sumBy(
		instructions.filter(isCorrectlySorted),
		(instruction) => instruction[(instruction.length - 1) / 2],
	),
);
