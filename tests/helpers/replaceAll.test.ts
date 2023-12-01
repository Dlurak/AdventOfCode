import { expect, test } from 'bun:test';
import { replaceMultiple } from '@helper';

test('replaceMultiple', () => {
	const fruitObj = {
		apple: 'orange',
		banana: 'grape',
	};

	expect(replaceMultiple('', fruitObj)).toBe('');
	expect(replaceMultiple('apple and banana', fruitObj)).toBe(
		'orange and grape',
	);
	expect(replaceMultiple('apple and banana', {})).toBe('apple and banana');
	expect(replaceMultiple('Apple and Banana', fruitObj)).toBe(
		'Apple and Banana',
	);
});
