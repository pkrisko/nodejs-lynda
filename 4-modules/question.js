const readline = require('readline');

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you trying to do with Node.js? "
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const collectAnswers = (questions, done) => {
  let answers = [];
  // Callback invoked once user has answered a question.
  const questionAnswered = answer => {
    answers.push(answer);
    answers.length < questions.length
      ? rl.question(questions[answers.length], questionAnswered)
      : done(answers);
  }
  // Initiate first question.
  rl.question(questions[0], questionAnswered);
};

collectAnswers(questions, answers => {
  const [name, location, goal] = answers;
  console.log(`Hey ${name} from ${location}, good luck with ${goal}`);
  process.exit();
});
