import { loadData, unique } from '@helper';

const input = await loadData();
const passphrases = input.split('\n').map((line) => line.split(/\s/g));
const validPassphrases = passphrases.filter(
	(words) => unique(words).length === words.length,
);

console.log(validPassphrases.length);
