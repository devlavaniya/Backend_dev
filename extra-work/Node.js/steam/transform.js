const fs=require("fs");
const {Transform}=require("stream");

const readSteam=fs.createReadStream("../steam/transforms.txt");
const writeSteam=fs.createWriteStream("../steam/transform_copy.txt");

const upper=new Transform({      //     Transform stream to convert data to uppercase
    transform(chunk,encoding,callback){
        const upperChunk=chunk.toString().toUpperCase();
        callback(null,upperChunk);
    }
});
const removeVowel=new Transform({      //     Transform stream to remove vowels
    transform(chunk,encoding,callback){
        let data = chunk.toString();
        data = data.replace(/[aeiouAEIOU]/g, '*');
        callback(null,data);
    }
});
readSteam.pipe(upper).pipe(removeVowel).pipe(writeSteam);  // Piping read stream through transform stream to write stream