const fs = require("fs");

const md = `
# This is a new file.

We will write a file to fs.writeFile.

+ fs.readdir
- fs.readFile
* fs.writeFile

`;

fs.writeFile("notes.md", md.trim(), err => {
  if (err) {
    console.error(`Error has occurred. ${err}`);
    process.exit();
  }
})