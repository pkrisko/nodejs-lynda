// Prints out (and clears) a progress message of how long the user has waited.
// Keeps printing until waitTime (in ms) is finished.

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const waitMessage = (p) => `Progress ${p}%...`;

const clearMessage = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
};

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    clearMessage();
    process.stdout.write(waitMessage(p));
};

console.log(`setting a ${waitTime} delay`);

const timerFinished = () => {
    clearInterval(interval);
    clearMessage();
    console.log("Done!");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
