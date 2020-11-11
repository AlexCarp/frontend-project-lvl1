import { isPrime } from '../src/games/prime';

test('Is even', () => {
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(53)).toBeTruthy();

  expect(isPrime(16)).toBeFalsy();
  expect(isPrime(921)).toBeFalsy();
});
