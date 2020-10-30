import getRandomNumber from '../utils/get-random-number.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const formatUserAnswer = (answer) => (answer === 'yes' ? answer : 'no');

export default {
  rulesMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: () => getRandomNumber(),
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === formatUserAnswer(userAnswer),
  getCorrectAnswer,
};
