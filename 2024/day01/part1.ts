import { loadData, sumBy, transpose, lines, words, mapToInt } from '@helper';

const input = await loadData();
const parsed = lines(input, (l) => mapToInt(words(l)));
const nums = transpose(parsed).map((x) => x.sort());

console.log(sumBy(nums[0], (num1, index) => Math.abs(num1 - nums[1][index])));
