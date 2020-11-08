import getRandomNumber from '../utils/get-random-number.js';

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const num = getRandomNumber();

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

const primeGame = {
  rulesMsg: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
};

export default primeGame;
