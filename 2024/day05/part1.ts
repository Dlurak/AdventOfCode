import { isSorted, loadData, sumBy } from '@helper';
import { comparePages, parse } from './lib';

const input = await loadData();
const { rulesGraph, instructions } = parse(input);

console.log(
	sumBy(
		instructions.filter((ins) => isSorted(ins, comparePages(rulesGraph))),
		(instruction) => instruction[(instruction.length - 1) / 2],
	),
);
