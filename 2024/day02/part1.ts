import { lines, loadData, words, mapToInt, pair, isInRange } from '@helper';

const input = await loadData();
const parsed = lines(input, (l) => mapToInt(words(l)));

const isSafe = (nums: number[]) => {
	const diffs = pair(nums).map(([num1, num2]) => num1 - num2);

	const increasing = diffs.every((d) => isInRange(1, d, 3));
	const decreasing = diffs.every((d) => isInRange(-3, d, -1));

	return increasing || decreasing;
};

console.log(parsed.filter(isSafe).length);
