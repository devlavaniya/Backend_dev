const fs=require("fs");


const createReadStream=fs.createReadStream("../steam/input.txt","utf-8",{highWaterMark:32*1024});  // 32KB
const createWriteStream=fs.createWriteStream("../steam/copy.txt",{highWaterMark:32*1024});  // 32KB

// ReadStream.on("data",(chunk)=>{
//     console.log(chunk.toString());
//     WriteStream.write(chunk);
// })

createReadStream.pipe(createWriteStream);    // Simplified way to copy data from read stream to write stream

// ReadStream.on("end",()=>{
//     console.log("File copy completed.");    //   Optional end event handling
//     WriteStream.end();
// });
