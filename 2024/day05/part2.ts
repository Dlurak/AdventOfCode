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

const { rulesGraph, instructions } = parse(input);

const resort = (instruction: number[]) => {
	return instruction.toSorted((a, b) => {
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
		instructions
			.map((instruction) => {
				const resorted = resort(instruction);
				const isModified = instruction.join(',') !== resorted.join(',');
				return [resorted, isModified] as const;
			})
			.filter(([_, isModified]) => isModified),
		([instruction]) => instruction[(instruction.length - 1) / 2],
	),
);
