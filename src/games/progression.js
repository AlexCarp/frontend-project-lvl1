import getRandomNumber from '../get-random-number.js';

const PLACEHOLDER = '..';

const getSequence = (firstElement, step, sequenceLength) => (
  new Array(sequenceLength)
    .fill(firstElement)
    .map((item, i) => item + i * step)
);

const getQuestionFromSequence = (sequence, missingIndex) => (
  sequence
    .map((item, i) => (i !== missingIndex ? item : PLACEHOLDER))
    .join(' ')
);

const getRound = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber(20, 1);
  const sequenceLength = getRandomNumber(10, 5);
  const sequence = getSequence(firstElement, step, sequenceLength);
  const missingIndex = getRandomNumber(sequence.length - 1);

  return {
    question: getQuestionFromSequence(sequence, missingIndex),
    answer: String(sequence[missingIndex]),
  };
};

const progressionGame = {
  gameDescription: 'What number is missing in the progression?',
  getRound,
};

export { getSequence, getQuestionFromSequence };
export default progressionGame;
