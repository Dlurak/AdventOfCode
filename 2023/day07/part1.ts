import { loadData, countGroups, sumBy, sort, words, lines } from '@helper';
import { scoreHandType, scoreHighCards } from './lib';

const input = await loadData();

const hands = lines(input, (l) => {
	const [cards, bid] = words(l);
	return {
		bid: parseInt(bid),
		score: scoreHighCards(cards) + scoreHandType(cards),
	};
});

const winnings = sort(hands, ({ score }) => score);

console.log(sumBy(winnings, ({ bid }, index) => bid * (index + 1)));
