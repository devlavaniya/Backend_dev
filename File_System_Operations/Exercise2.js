const fs = require("fs");

const filePath = process.argv[2] || "./server.log";
const stream = fs.createReadStream(filePath, { encoding: "utf8" });

let buffer = "";
let totalLines = 0;
let errorCount = 0;
let warnCount = 0;
let infoCount = 0;

stream.on("data", (chunk) => {
  buffer += chunk;
  let lines = buffer.split("\n");
  buffer = lines.pop(); 

  lines.forEach((line) => {
    totalLines++;
    if (line.includes("ERROR")) errorCount++;
    else if (line.includes("WARN")) warnCount++;
    else if (line.includes("INFO")) infoCount++;
  });
});

stream.on("end", () => {
  if (buffer.length > 0) {
    totalLines++;
    if (buffer.includes("ERROR")) errorCount++;
    else if (buffer.includes("WARN")) warnCount++;
    else if (buffer.includes("INFO")) infoCount++;
  }

  console.log("Summary Report");
  console.log("Total lines:", totalLines);
  console.log("Errors:", errorCount);
  console.log("Warnings:", warnCount);
  console.log("Info:", infoCount);

  if (totalLines > 0) {
    console.log("Error %:", ((errorCount / totalLines) * 100).toFixed(2) + "%");
    console.log("Warning %:", ((warnCount / totalLines) * 100).toFixed(2) + "%");
    console.log("Info %:", ((infoCount / totalLines) * 100).toFixed(2) + "%");
  }
});

stream.on("error", (err) => {
  console.log("Error reading file:", err.message);
});
