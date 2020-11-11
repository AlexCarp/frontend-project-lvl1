import { getSequence, getQuestionFromSequence } from '../src/games/progression';

describe('Progression', () => {
  test('Sequence generation', () => {
    expect(getSequence(1, 1, 3)).toEqual([1, 2, 3]);
    expect(getSequence(5, 0, 5)).toEqual([5, 5, 5, 5, 5]);
    expect(getSequence(12, 5, 4)).toEqual([12, 17, 22, 27]);
  });

  test('Getting question from sequence', () => {
    expect(getQuestionFromSequence([1, 2, 3], 1)).toBe('1 .. 3');
    expect(getQuestionFromSequence([5, 5, 5, 5, 5], 4)).toBe('5 5 5 5 ..');
    expect(getQuestionFromSequence([12, 17, 22, 27], 0)).toBe('.. 17 22 27');
  });
});
