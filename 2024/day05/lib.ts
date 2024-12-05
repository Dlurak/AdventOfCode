import { lines, mapToInt } from '@helper';

export const parse = (input: string) => {
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

export const comparePages =
	(rulesGraph: Record<number, number[]>) => (a: number, b: number) => {
		if ((rulesGraph[a] ?? []).includes(b)) {
			return -1;
		}
		if ((rulesGraph[b] ?? []).includes(a)) {
			return 1;
		}
		return 0;
	};
