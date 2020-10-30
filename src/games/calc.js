import getRandomNumber from '../utils/get-random-number.js';

const MATH_OPERATIONS = ['+', '-', '*'];

const getRandomOperation = () => MATH_OPERATIONS[getRandomNumber(MATH_OPERATIONS.length)];

const getCorrectAnswer = (question) => {
  const expressionArr = question.split(' ');
  const firstOperand = Number(expressionArr[0]);
  const secondOperand = Number(expressionArr[2]);

  switch (expressionArr[1]) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Invalid math expression ${question}.`);
  }
};

export default {
  rulesMsg: 'What is the result of the expression?',
  getQuestion: () => `${getRandomNumber()} ${getRandomOperation()} ${getRandomNumber()}`,
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === Number(userAnswer),
  getCorrectAnswer,
};
