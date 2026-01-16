const fs = require("fs");
const { Transform } = require("stream");

const upper = new Transform({
  transform(chunk, encoding, cb) {
    const modifiedData = chunk.toString().toUpperCase();
    cb(null, modifiedData);
  },
});

const readStream = fs.createReadStream("./output.txt");
const writeStream = fs.createWriteStream("./login.txt");

readStream.pipe(upper).pipe(writeStream);