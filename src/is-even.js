import promptly from 'promptly';

const getRandomNumber = (max) => Math.ceil(Math.random() * max);

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const formatUserAnswer = (answer) => (answer === 'yes' ? answer : 'no');

export default async () => {
  const maxRandomNumber = 100;
  const maxWinsCount = 3;
  let winsCounter = 0;

  console.log('Welcome to the Brain Games!');

  const userName = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (winsCounter < maxWinsCount) {
    const randomNumber = getRandomNumber(maxRandomNumber);

    console.log(`Question: ${randomNumber}`);

    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer: ');
    const formattedUserAnswer = formatUserAnswer(userAnswer);
    const correctAnswer = getCorrectAnswer(randomNumber);

    if (formattedUserAnswer === correctAnswer) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }

  if (winsCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
