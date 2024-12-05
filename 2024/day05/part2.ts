import { quickSelect, isSorted, lines, loadData, mapToInt, sumBy } from '@helper';

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

const comparePages = (a: number, b: number) => {
	if ((rulesGraph[a] ?? []).includes(b)) {
		return -1;
	}
	if ((rulesGraph[b] ?? []).includes(a)) {
		return 1;
	}
	return 0;
};

console.log(
	sumBy(
		instructions.filter((ins) => !isSorted(ins, comparePages)),
		(ins) => quickSelect(ins, (ins.length - 1) / 2, comparePages),
	),
);
