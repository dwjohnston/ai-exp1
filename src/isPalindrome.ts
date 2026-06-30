/**
 🤖
 This file created with AI.
 */

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

function normalize(char: string): string {
  const lower = char.toLowerCase();
  return VOWELS.has(lower) ? 'a' : lower;
}

export function isPalindrome(s: string): boolean {
  const chars = s.toLowerCase().replace(/[^a-z]/g, '').split('').map(normalize);
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    if (chars[left] !== chars[right]) return false;
    left++;
    right--;
  }
  return true;
}
