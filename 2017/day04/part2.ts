import { lines, loadData, unique, words } from '@helper';

const input = await loadData();
const passphrases = lines(input, words);
const validPassphrases = passphrases.filter((words) => {
	const sanitaziedWords = words.map((w) => w.split('').toSorted().join(''));
	return unique(sanitaziedWords).length === sanitaziedWords.length;
});

console.log(validPassphrases.length);
