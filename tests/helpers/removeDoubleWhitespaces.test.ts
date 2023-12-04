import { describe, expect, it } from 'bun:test'
import { removeDoubleWhitespaces } from '@helper';

describe('removeDoubleWhitespaces', () => {
  it('removes double whitespaces from the string', () => {
    const input = 'This   is   a   test';
    const result = removeDoubleWhitespaces(input);
    expect(result).toBe('This is a test');
  });

  it('handles strings with no double whitespaces', () => {
    const input = 'No double spaces here';
    const result = removeDoubleWhitespaces(input);
    expect(result).toBe(input);
  });

  it('handles empty strings', () => {
    const input = '';
    const result = removeDoubleWhitespaces(input);
    expect(result).toBe('');
  });
});
