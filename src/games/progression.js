import getRandomNumber from '../utils/get-random-number.js';

const PLACEHOLDER = '..';

const getNumbersSequence = () => {
  const rndLength = getRandomNumber(10, 5);
  const firstMember = getRandomNumber();
  const sequenceStep = getRandomNumber(20, 1);

  return new Array(rndLength)
    .fill(firstMember)
    .map((member, i) => member + i * sequenceStep);
};

const getQuestionFromSequence = (sequence, missingIndex) => (
  sequence
    .map((member, i) => (i !== missingIndex ? member : PLACEHOLDER))
    .join(' ')
);

const getRound = () => {
  const sequence = getNumbersSequence();
  const missingIndex = getRandomNumber(sequence.length - 1);

  return {
    question: getQuestionFromSequence(sequence, missingIndex),
    answer: String(sequence[missingIndex]),
  };
};

const progressionGame = {
  rulesMsg: 'What number is missing in the progression?',
  getRound,
};

export default progressionGame;
