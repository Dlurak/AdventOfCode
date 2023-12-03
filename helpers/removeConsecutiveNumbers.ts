/**
 * Removes consecutive numbers from an array.
 *
 * @param numbers - The array of numbers to process.
 * @returns - A new array with consecutive numbers removed.
 * @throws {TypeError} - If the input is not an array of numbers.
 *
 * @example
 * ```Typescript
 * const inputArray = [1, 2, 3, 5, 6, 8, 9];
 * const resultArray = removeConsecutiveNumbers(inputArray);
 * console.log(resultArray); // Output: [1, 5, 8]
 * ```
 */
export const removeConsecutiveNumbers = (numbers: number[]): number[] => {
	const isConsecutive = (number1: number, number2: number) =>
		number2 - number1 === 1;

	return numbers.filter(
		(element, index) => !isConsecutive(numbers[index - 1] ?? NaN, element),
	);
};
