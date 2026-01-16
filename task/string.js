const fs = require("fs");
const http = require("http");

const readStream = fs.createReadStream("./output.txt", {
  highWaterMark: 64 * 1024,
});

const writeStream = fs.createWriteStream("./output.txt");
writeStream.write("\nthis is some text");
writeStream.end();

writeStream.on("finish", () => {
  console.log("writing finish");
});

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});