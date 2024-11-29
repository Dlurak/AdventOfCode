import { loadData, unique } from '@helper';

const input = await loadData();
const passphrases = input.split('\n').map((line) => line.split(/\s/g));
const validPassphrases = passphrases.filter((words) => {
	const sanitaziedWords = words.map((w) => w.split('').sort().join(''));
	return unique(sanitaziedWords).length === sanitaziedWords.length;
});

console.log(validPassphrases.length);
