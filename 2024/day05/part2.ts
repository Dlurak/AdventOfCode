import { quickSelect, isSorted, loadData, sumBy } from '@helper';
import { parse, comparePages } from './lib';

const input = await loadData();
const { rulesGraph, instructions } = parse(input);
const compare = comparePages(rulesGraph);

console.log(
	sumBy(
		instructions.filter((ins) => !isSorted(ins, compare)),
		(ins) => quickSelect(ins, (ins.length - 1) / 2, compare),
	),
);
