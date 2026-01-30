const fs = require("fs");
const path = require("path");

function syncDirs(sourceDir, targetDir) {
  try {
    const sourceFiles = fs.readdirSync(sourceDir);

    sourceFiles.forEach((file) => {
      const srcPath = path.join(sourceDir, file);
      const tgtPath = path.join(targetDir, file);

      try {
        if (!fs.existsSync(tgtPath)) {
          fs.copyFileSync(srcPath, tgtPath);
          console.log("Copied:", file);
        } else {
          console.log("Already exists:", file);
        }
      } catch (err) {
        console.log("Error handling file:", file, "-", err.message);
      }
    });
  } catch (err) {
    console.log("Error reading directories:", err.message);
  }
}

const source = process.argv[2] || "sourceDir";
const target = process.argv[3] || "targetDir";

syncDirs(source, target);
