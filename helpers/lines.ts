type LineOptions = {
	size?: 'line' | 'block';
};

/**
 * Splits a string into an array of processed lines or blocks, based on the provided size option.
 *
 * @template T - The type of the elements returned by the `mapper` function.
 * @param {string} content - The input string to be split and processed.
 * @param {(line: string, index: number) => T} [mapper=(x) => x as T] - A function to process each line or block. Defaults to returning the line/block unchanged.
 * @param {LineOptions} [options={ size: 'line' }] - Configuration options.
 * @param {'line' | 'block'} [options.size='line'] - Determines the split behavior:
 *  - `'line'`: Splits on single newlines (`\n`).
 *  - `'block'`: Splits on double newlines (`\n\n`).
 *
 * @returns {T[]} An array of processed lines or blocks.
 *
 * @example
 * ```typescript
 * const input = " Hello   \n   World\nHow are you?";
 * const result = lines(input, (line) => line.trim());
 * console.log(result); // ["Hello", "World", "How are you?"]
 * ```
 *
 * @example
 * ```typescript
 * const input = "Hello\nWorld\n\nHow are you?\nFine.";
 * const result = lines(input, (block) => block.toUpperCase(), { size: 'block' });
 * console.log(result); // ["HELLO\nWORLD", "HOW ARE YOU?\nFINE."]
 * ```
 */
export const lines = <T>(
	content: string,
	mapper: (line: string, index: number) => T = (x) => x as T,
	{ size = 'line' }: LineOptions = {},
): T[] => content.split(size === 'line' ? '\n' : '\n\n').map(mapper);
