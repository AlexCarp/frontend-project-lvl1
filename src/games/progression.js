import getRandomNumber from '../get-random-number.js';

const PLACEHOLDER = '..';

const getSequence = (firstMember, step, sequenceLength) => (
  new Array(sequenceLength)
    .fill(firstMember)
    .map((member, i) => member + i * step)
);

const getQuestionFromSequence = (sequence, missingIndex) => (
  sequence
    .map((member, i) => (i !== missingIndex ? member : PLACEHOLDER))
    .join(' ')
);

const getRound = () => {
  const firstMember = getRandomNumber();
  const step = getRandomNumber(20, 1);
  const sequenceLength = getRandomNumber(10, 5);
  const sequence = getSequence(firstMember, step, sequenceLength);
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

export default progressionGame;
