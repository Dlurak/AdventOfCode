const gcdBase = (a: number, b: number): number =>
	b === 0 ? a : gcdBase(b, a % b);
const lcmBase = (a: number, b: number) => (a * b) / gcdBase(a, b);

/**
 * Calculates the Least Common Multiple (LCM) of an array of numbers.
 *
 * @param numbers - An array of numbers for which to calculate the LCM.
 * @returns The LCM of the input numbers.
 */
export const lcm = (numbers: number[]) =>
	numbers.reduce((acc, currentValue) => lcmBase(acc, currentValue));
