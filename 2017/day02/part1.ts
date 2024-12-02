import { lines, loadData, mapToInt, sum, words } from '@helper';

const input = await loadData();
const parsed = lines(input, (l) => mapToInt(words(l)));

const diffs = parsed.map((line) => Math.max(...line) - Math.min(...line));

console.log(sum(diffs));
