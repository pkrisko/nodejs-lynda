const { collectAnswers } = require('./lib/questionService');

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you trying to do with Node.js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => {
  console.log(`Just received answer: ${answer}`);
});

answerEvents.on("complete", answers => {
  const [name, location, goal] = answers;
  console.log(`Hey ${name} from ${location}, good luck with ${goal}`);
  process.exit();
});
