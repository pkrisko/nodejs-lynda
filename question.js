// Prompt user input to ask questions, then print out
// results of those questions on process exit.

const questions = [
    "What is your name?",
    "What would you reather be doing?",
    "What is your language of choice"
];

const answers = [];

const ask = (i = 0) => {
    process.stdout.write(`\n\n${questions[i]}`);
    process.stdout.write(" > ");
};

ask(); // Make initial call.
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        return ask(answers.length);
    }
    process.exit();
});

process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`\nGo ${activity} ${name} you can write ${lang} later.\n`);
});
