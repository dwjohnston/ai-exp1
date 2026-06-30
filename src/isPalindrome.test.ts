/**
 🤖
 This file created with AI.
 */

import { test, expect } from "bun:test";
import { isPalindrome } from "./isPalindrome";

test("standard palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("simple non-palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("empty string is a palindrome", () => {
  expect(isPalindrome("")).toBe(true);
});

test("single character is a palindrome", () => {
  expect(isPalindrome("a")).toBe(true);
});

test("vowels treated as same letter - 'aeiou' is a palindrome", () => {
  expect(isPalindrome("aeiou")).toBe(true);
});

test("vowels treated as same letter - 'racecar' with mixed vowels", () => {
  // r-a-c-e-c-i-r -> r-[vowel]-c-[vowel]-c-[vowel]-r -> palindrome
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("racecir")).toBe(true);
});

test("case insensitive", () => {
  expect(isPalindrome("Racecar")).toBe(true);
});

test("ignores non-alphabetic characters", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("vowels treated as same: 'aba' and 'ebe' both palindromes", () => {
  expect(isPalindrome("aba")).toBe(true);
  expect(isPalindrome("ebe")).toBe(true);
});

test("vowels treated as same: 'aXe' - vowel, X, vowel -> palindrome", () => {
  expect(isPalindrome("aXe")).toBe(true);
});
