import promptly from 'promptly';

const MAX_WINS_COUNT = 3;

export default async (game) => {
  let winsCounter = 0;

  console.log('Welcome to the Brain Games!');

  const userName = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log(game.rulesMsg);

  while (winsCounter < MAX_WINS_COUNT) {
    const question = game.getQuestion();
    console.log(`Question: ${question}`);

    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer: ');

    if (game.isUserAnswerCorrect(question, userAnswer)) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${game.getCorrectAnswer(question)}".`);
      break;
    }
  }

  if (winsCounter === MAX_WINS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
