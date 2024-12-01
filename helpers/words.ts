/**
 * Splits a given string into an array of words.
 *
 * This function uses a regular expression to split the input string
 * by whitespace characters (spaces, tabs, newlines, etc.).
 *
 * @param content - The string to be split into words.
 * @returns An array of words extracted from the input string.
 *
 * @example
 * ```typescript
 * words("Hello world!"); // Output: ["Hello", "world!"]
 * ```
 *
 * @example
 * ```typescript
 * words("This is\ta\ntest."); // Output: ["This", "is", "a", "test."]
 * ```
 */
export const words = (content: string) => content.trim().split(/\s+/);
