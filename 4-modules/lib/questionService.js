const readline = require("readline");
const { EventEmitter } = require("events");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const collectAnswers = (questions, done = () => {}) => {
  let answers = [];
  const emitter = new EventEmitter();
  // Callback invoked once user has answered a question.
  const questionAnswered = answer => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered)
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  }
  // Initiate first question.
  rl.question(questions[0], questionAnswered);
  return emitter;
};

module.exports = { collectAnswers };
