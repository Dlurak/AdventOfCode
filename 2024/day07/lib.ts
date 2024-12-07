import { mapToInt, lines, words } from '@helper';

export const parse = (input: string) => {
	return lines(input, (l) => {
		const [testValue, numbers] = l.split(': ', 2);
		return {
			testValue: parseInt(testValue),
			numbers: mapToInt(words(numbers)),
		};
	});
};

export const testNumbers = (
	numbers: number[],
	testValue: number,
	combine: (num1: number, num2: number) => number[],
): boolean => {
	if (numbers.length === 1) {
		return numbers[0] === testValue;
	}
	const [first, second] = numbers;
	if (first > testValue) {
		return false;
	}

	return combine(first, second).some((num) =>
		testNumbers([num, ...numbers.slice(2)], testValue, combine),
	);
};
