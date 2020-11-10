import getRandomNumber from '../get-random-number.js';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRandomNumber();

  return {
    question: num,
    answer: isEven(num) ? 'yes' : 'no',
  };
};

const evenGame = {
  gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
};

export default evenGame;
