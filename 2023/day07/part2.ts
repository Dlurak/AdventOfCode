import { loadData, sum, countGroups } from '@helper';

const input = await loadData();

const numCardLabels = ['2', '3', '4', '5', '6', '7', '8', '9', 'T'];
const faceCardLabels = ['Q', 'K', 'A'];
const cardLabels = ['J', ...numCardLabels, ...faceCardLabels];

const toCardValue = (card: string) => cardLabels.indexOf(card) + 1;

const scoreHighCards = (cards: string) =>
	sum(
		cards
			.split('')
			.reverse()
			.map((c, i) => toCardValue(c) * 100 ** i),
	);

/**
 * Things like full house...
 */
const scoreHandType = (cards: string) => {
	const cardCounts = countGroups(cards.split(''));

	const counts = Object.entries(cardCounts)
		.filter(([type, _]) => type !== 'J')
		.map(([_, amount]) => amount)
		.sort((a, b) => b - a);

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

const scoreHand = (hand: string) => scoreHighCards(hand) + scoreHandType(hand);

const hands = input
	.split('\n')
	.map((l) => l.split(/\s+/))
	.map(([cards, bid]) => ({
		bid: parseInt(bid),
		score: scoreHand(cards),
	}))
	.slice(0, -1);

const winnings = hands
	.sort(({ score: scoreA }, { score: scoreB }) => scoreA - scoreB)
	.map(({ bid }, index) => bid * (index + 1));

console.log(sum(winnings));
