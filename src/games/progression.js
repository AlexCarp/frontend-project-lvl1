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

const getQuestionFromSequence = (sequence) => {
  const rndIndex = getRandomNumber(sequence.length - 1);

  return sequence
    .map((member, i) => (i !== rndIndex ? member : PLACEHOLDER))
    .join(' ');
};

const getCorrectAnswer = (sequence) => {
  const sequenceArr = sequence.split(' ');
  const missingIndex = sequenceArr.findIndex((member) => member === PLACEHOLDER);
  const sequenceStep = missingIndex > 1
    ? Number(sequenceArr[1]) - Number(sequenceArr[0])
    : Number(sequenceArr[missingIndex + 2]) - Number(sequenceArr[missingIndex + 1]);

  return Number(sequenceArr[missingIndex - 1]) + sequenceStep
    || Number(sequenceArr[missingIndex + 1]) - sequenceStep;
};

export default {
  rulesMsg: 'What number is missing in the progression?',
  getQuestion: () => getQuestionFromSequence(getNumbersSequence()),
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === Number(userAnswer),
  getCorrectAnswer,
};
