import getRandomNumber from '../utils/get-random-number.js';

const MAX_RANDOM_VALUE = 100;
const MIN_RANDOM_VALUE = 1;

const getGCD = (num1, num2) => {
  const greaterNum = Math.max(num1, num2);
  const smallerNum = Math.min(num1, num2);
  const remainder = greaterNum % smallerNum;

  if (remainder === 0) {
    return smallerNum;
  }

  return getGCD(smallerNum, remainder);
};

const getRound = () => {
  const num1 = getRandomNumber(MAX_RANDOM_VALUE, MIN_RANDOM_VALUE);
  const num2 = getRandomNumber(MAX_RANDOM_VALUE, MIN_RANDOM_VALUE);

  return {
    question: `${num1} ${num2}`,
    answer: String(getGCD(num1, num2)),
  };
};

const gcdGame = {
  rulesMsg: 'Find the greatest common divisor of given numbers.',
  getRound,
};

export default gcdGame;
