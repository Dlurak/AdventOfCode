import { lines, loadData, mapToInt, sumBy } from '@helper';
import { buttonPresses } from './lib';

const input = await loadData();
const parsed = lines(
	input,
	(block) => {
		const [a, b, prize] = lines(block, (l) =>
			mapToInt(l.replace(/^[^\d]+/, '').split(/[^\d]+/)),
		);
		return { a, b, prize };
	},
	{ size: 'block' },
);

const counts = parsed
	.map(buttonPresses)
	.filter((x): x is { a: number; b: number } => !!x);

console.log(sumBy(counts, ({ a, b }) => a * 3 + b));
