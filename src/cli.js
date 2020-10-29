import promptly from 'promptly';

console.log('Welcome to the Brain Games!');

export default async () => {
  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);
};
