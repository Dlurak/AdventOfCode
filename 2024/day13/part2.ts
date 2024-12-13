import { lines, loadData, mapToInt, sumBy } from '@helper';
import { buttonPresses } from './lib';

const SUMMAND = 10_000_000_000_000;

const input = await loadData();
const parsed = lines(
	input,
	(block) => {
		const [a, b, prize] = lines(block, (l) =>
			mapToInt(l.replace(/^[^\d]+/, '').split(/[^\d]+/)),
		);
		return {
			a,
			b,
			prize: prize.map((x) => x + SUMMAND),
		};
	},
	{ size: 'block' },
);

const counts = parsed
	.map(buttonPresses)
	.filter((x): x is { a: number; b: number } => !!x);

console.log(sumBy(counts, ({ a, b }) => a * 3 + b));
