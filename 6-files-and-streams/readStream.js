const fs = require("fs");

const hipsumPath = "./assets/lorem-hipsum.txt";
const readStream = fs.createReadStream(hipsumPath, "UTF-8");

// On each buffer read
readStream.on("data", data => {
  console.log(`Read ${data.length} characters of text`);
});

// On first read
readStream.once("data", data => {
  console.log(`First bit of data length ${data.length}`);
});
