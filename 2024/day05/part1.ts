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

const isCorrectlySorted = (instruction: number[]) => {
	return instruction.every((page, i) => {
		const followingPages = instruction.slice(i + 1);
		return followingPages.every(
			(p) => !rules.some(([r1, r2]) => r1 === p && r2 === page),
		);
	});
};

const summands = instructions.filter(isCorrectlySorted);

console.log(
	sumBy(summands, (instruction) => instruction[(instruction.length - 1) / 2]),
);
