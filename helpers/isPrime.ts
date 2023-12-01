/**
 * Checks if a given number is a prime number.
 *
 * @param num - The number to be checked for primality.
 * @returns - True if the number is prime, false otherwise.
 *
 * @example
 * // Returns true
 * isPrime(2);
 *
 * @example
 * // Returns false
 * isPrime(4);
 *
 * @example
 * // Returns true
 * isPrime(17);
 *
 * @example
 * // Returns false
 * isPrime(10);
 */
export const isPrime = (num: number) => {
	if (num === 2 || num === 3) return true;
	if (num <= 1 || num % 2 === 0 || num % 3 === 0) return false;

	for (let i = 5; i <= Math.sqrt(num); i += 6) if (num % i === 0) return false;

	return true;
};
