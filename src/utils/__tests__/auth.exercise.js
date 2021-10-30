// Testing Pure Functions

// 🐨 import the function that we're testing
import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords

test('isPasswordAllowed returns true for valid passwords', () => {
  expect(isPasswordAllowed('!aBc123')).toBe(true)
})

test('isPasswordAllowed returns false for invalid passwords', () => {
  expect(isPasswordAllowed('a2c')).toBe(false)
  expect(isPasswordAllowed('123456')).toBe(false)
  expect(isPasswordAllowed('123456')).toBe(false)
  expect(isPasswordAllowed('ABCdef')).toBe(false)
  expect(isPasswordAllowed('ABC123')).toBe(false)
  expect(isPasswordAllowed('ABCdef123')).toBe(false)
})
