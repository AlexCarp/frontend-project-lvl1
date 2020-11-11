import { calculate } from '../src/games/calc';

test('Expressions calculator', () => {
  expect(calculate(3, 5, '+')).toBe(8);
  expect(calculate(3, 5, '-')).toBe(-2);
  expect(calculate(3, 5, '*')).toBe(15);
  expect(calculate(3, 0, '+')).toBe(3);
  expect(calculate(3, 0, '-')).toBe(3);
  expect(calculate(0, 5, '*')).toBe(0);
});
