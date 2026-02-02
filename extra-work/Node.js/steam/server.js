const fs=require("fs");
const http=require("http");

// fs.readFile("../steam/input.txt","utf-8",(err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }
//     console.log("File content:",data);
// });

const readSteam=fs.createReadStream("../steam/input.txt","utf-8",{highWaterMark:64*1024});  // 64KB

readSteam.on("data",(chunk)=>{
    console.log("New chunk received:");
    console.log(chunk.toString());   // Convert buffer to string
});

const writeSteam=fs.createWriteStream("../steam/input.txt",{highWaterMark:64*1024,flags:"a"});  // Append mode by flag a 

writeSteam.write("Hello World\n");
writeSteam.write("This is a test of write stream.\n");
writeSteam.end("Final chunk of data.\n");
writeSteam.end();
writeSteam.on("finish",()=>{
    console.log("All data written to file.");
});

