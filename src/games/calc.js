import getRandomNumber from '../get-random-number.js';

const MATH_OPERATORS = ['+', '-', '*'];

const getRandomOperator = () => MATH_OPERATORS[getRandomNumber(MATH_OPERATORS.length - 1)];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  return {
    question: `${num1} ${operator} ${num2}`,
    answer: String(calculate(num1, num2, operator)),
  };
};

const calcGame = {
  gameDescription: 'What is the result of the expression?',
  getRound,
};

export default calcGame;
