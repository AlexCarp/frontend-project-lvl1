import getRandomNumber from '../utils/get-random-number.js';
import getVerboseBool from '../utils/get-verbose-bool.js';
import formatUserBoolAnswer from '../utils/format-user-bool-answer.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => getVerboseBool(isEven(num));

export default {
  rulesMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: getRandomNumber,
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === formatUserBoolAnswer(userAnswer),
  getCorrectAnswer,
};
