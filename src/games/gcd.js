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

export default {
  rulesMsg: 'Find the greatest common divisor of given numbers.',
  getQuestion: () => `${getRandomNumber()} ${getRandomNumber()}`,
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === Number(userAnswer),
  getCorrectAnswer,
};
