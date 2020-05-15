const fs = require("fs");

fs.readFile("./README.md", "UTF-8", (err, text) => {
  if (err) {
    console.error(`Error has occurred. ${err}`);
    process.exit();
  }
  console.log("File contents successfully read:\n");
  console.log(text);
});

fs.readFile("./node-logo.png", (err, img) => {
  if (err) {
    console.error(`Error has occurred. ${err}`);
    process.exit();
  }
  console.log("Binary file buffer:\n");
  console.log(img);
});
