const fs = require("fs");
const path = require("path");

const choice = process.argv[2];

switch (choice) {
  case "read":
    fs.readFile("./example.txt", "utf8", (err, data) => {
      if (err) console.log("Error reading file");
      else console.log(data);
    });
    break;

  case "write":
    fs.writeFile("example.txt", "Hello !", (err) => {
      if (err) console.log("Error writing file");
      else console.log("Written successfully");
    });
    break;

  case "copy":
    fs.copyFile("example.txt", "copy.txt", (err) => {
      if (err) console.log("Error copying file");
      else console.log("Copied successfully");
    });
    break;

  case "delete":
    fs.unlink("copy.txt", (err) => {
      if (err) console.log("Error deleting file");
      else console.log("Deleted successfully");
    });
    break;

  case "list":
    fs.readdir(".", (err, files) => {
      if (err) console.log("Error listing directory");
      else files.forEach((f) => console.log(f));
    });
    break;

  default:
    console.log("Invalid choice. Use read/write/copy/delete/list");
}
