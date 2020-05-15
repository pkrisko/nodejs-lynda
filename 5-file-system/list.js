const fs = require("fs");

fs.readdir("../4-modules", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});
