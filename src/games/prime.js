import getRandomNumber from '../utils/get-random-number.js';
import getVerboseBool from '../utils/get-verbose-bool.js';
import formatUserBoolAnswer from '../utils/format-user-bool-answer.js';

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

const getCorrectAnswer = (question) => getVerboseBool(isPrime(question));

export default {
  rulesMsg: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion: getRandomNumber,
  isUserAnswerCorrect:
    (question, userAnswer) => getCorrectAnswer(question) === formatUserBoolAnswer(userAnswer),
  getCorrectAnswer,
};
