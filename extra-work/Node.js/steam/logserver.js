const fs=require("fs");

const readStream=fs.createReadStream("../steam/log.txt","utf-8",{highWaterMark:16*1024});  // 16KB
const writeStream=fs.createWriteStream("../steam/logserver.txt",{highWaterMark:16*1024});  // 16KB

readStream.on("data",(chunk)=>{
    let data=chunk.toString().toUpperCase();   // Convert log data to uppercase by chunk
    writeStream.write(data);
})
readStream.on("end",()=>{
    console.log("Log file processing completed.");
});