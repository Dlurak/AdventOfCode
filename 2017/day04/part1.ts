import { lines, loadData, unique, words } from '@helper';

const input = await loadData();
const passphrases = lines(input, words);
const validPassphrases = passphrases.filter(
	(words) => unique(words).length === words.length,
);

console.log(validPassphrases.length);
