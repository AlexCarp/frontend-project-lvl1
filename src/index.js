import promptly from 'promptly';

export default async (game) => {
  const maxWinsCount = 3;
  let winsCounter = 0;

  console.log('Welcome to the Brain Games!');

  const userName = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log(game.rulesMsg);

  while (winsCounter < maxWinsCount) {
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

  if (winsCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
