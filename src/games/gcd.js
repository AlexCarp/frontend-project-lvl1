import getRandomNumber from '../utils/get-random-number.js';

const getGCD = (num1, num2) => {
  const greaterNum = Math.max(num1, num2);
  const smallerNum = Math.min(num1, num2);
  const remainder = greaterNum % smallerNum;

  if (remainder === 0) {
    return smallerNum;
  }

  return getGCD(smallerNum, remainder);
};

const getCorrectAnswer = (question) => {
  const expressionArr = question.split(' ');
  const firstOperand = Number(expressionArr[0]);
  const secondOperand = Number(expressionArr[1]);

  return getGCD(firstOperand, secondOperand);
};

const MAX_RANDOM_VALUE = 100;
const MIN_RANDOM_VALUE = 1;

export default {
  rulesMsg: 'Find the greatest common divisor of given numbers.',
  getQuestion: () => (
    `${getRandomNumber(MAX_RANDOM_VALUE, MIN_RANDOM_VALUE)} ${getRandomNumber(MAX_RANDOM_VALUE, MIN_RANDOM_VALUE)}`
  ),
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === Number(userAnswer),
  getCorrectAnswer,
};
