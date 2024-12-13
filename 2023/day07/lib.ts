import { countGroups } from "@helper";
import { sumBy } from "../../helpers/sum";

const numCardLabels = ['2', '3', '4', '5', '6', '7', '8', '9', 'T'];
const faceCardLabels = ['Q', 'K', 'A'];
const cardLabels = ['J', ...numCardLabels, ...faceCardLabels];

export const scoreHighCards = (cards: string) => {
	return sumBy(
		cards.split('').toReversed(),
		(c, i) => (cardLabels.indexOf(c) + 1) * 100 ** i,
	);
};

/**
 * Things like full house...
 */
export const scoreHandType = (cards: string) => {
	const cardCounts = countGroups(cards.split(''));

	const counts = Object.entries(cardCounts)
		.filter(([type]) => type !== 'J')
		.map(([_, amount]) => amount)
		.sort((a, b) => b! - a!);

	const twoCount = counts.filter((c) => c === 2).length;

	counts[0] = (counts[0] ?? 0) + (cardCounts.J ?? 0);

	if (counts[0] === 5) return 70_000_000_000;
	if (counts[0] === 4) return 60_000_000_000;
	if (counts.includes(3) && counts.includes(2)) return 50_000_000_000;
	if (counts[0] === 3) return 40_000_000_000;
	if (twoCount === 2) return 30_000_000_000;
	if (counts[0] === 2) return 20_000_000_000;

	return 10_000_000_000;
};
