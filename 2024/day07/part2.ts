import { loadData, sumBy } from '@helper';
import { parse, testNumbers } from './lib';

const input = await loadData();
const parsed = parse(input);

console.log(
	sumBy(
		parsed.filter(({ testValue, numbers }) => {
			return testNumbers(numbers, testValue, (num1, num2) => [
				num1 + num2,
				num1 * num2,
				parseInt(`${num1}${num2}`),
			]);
		}),
		({ testValue }) => testValue,
	),
);
