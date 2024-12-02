import { lines, loadData, mapToInt, sum, words } from '@helper';

const input = await loadData();
const parsed = lines(input, (l) => mapToInt(words(l)));

const quotients = parsed.map((line) => {
	return (
		line
			.map((num) => {
				const biggerNums = line.filter((n) => n > num);
				const otherNum = biggerNums.find((b) => b % num === 0) ?? 0;
				return otherNum / num;
			})
			.find((q) => q > 0) ?? 0
	);
});

console.log(sum(quotients));
