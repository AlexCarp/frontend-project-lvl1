import { getGCD } from '../src/games/gcd';

test('Greatest common divider', () => {
  expect(getGCD(2, 98)).toBe(2);
  expect(getGCD(32, 48)).toBe(16);
  expect(getGCD(17, 48)).toBe(1);
  expect(getGCD(1, 100)).toBe(1);
});
