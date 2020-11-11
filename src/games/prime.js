import getRandomNumber from '../get-random-number.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2 || num === 3) {
    return true;
  }

  const numGreatestDivider = Math.sqrt(num);

  for (let i = 2; i <= numGreatestDivider; i += 1) {
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
  gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
};

export { isPrime };
export default primeGame;
