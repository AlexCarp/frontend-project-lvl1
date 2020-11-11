import { isEven } from '../src/games/even';

test('Is even', () => {
  expect(isEven(4)).toBeTruthy();
  expect(isEven(1864)).toBeTruthy();

  expect(isEven(3)).toBeFalsy();
  expect(isEven(921)).toBeFalsy();
});
