const http=require("http");
const fs=require("fs");
const logStream=fs.createWriteStream("server.log",{flags:"a"});
const server=http.createServer((req,res)=>{
        const logEntry=`${new Date().toISOString()} - ${req.method} ${req.url}\n`;
        logStream.write(logEntry);

        
        if(req.url==="/" && req.method==="GET"){
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Welcome to the Home Page");
        }
        else if(req.url==="/about" && req.method==="GET"){
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("This is the About Page");
        }
        else if(req.url==="/user" && req.method==="GET"){
            res.writeHead(200,{"Content-Type":"application/json"});
            const user={name:"Jagdish",age:25,city:"New York"};
            res.end(JSON.stringify(user));
        }
        else if(req.url==="/upperCase"&& req.method==="POST"){
            
            let body="";
            req.on("data",chunk=>{
                body+=chunk.toString();
            });
            req.on("end",()=>{

                res.writeHead(200,{"Content-Type":"text/plain"});
                res.end(JSON.stringify({data: body.toUpperCase()}));
            });
        }
        else if(req.url==="/replaceVowel"&& req.method==="POST"){

            let body="";
            req.on("data",chunk =>{
                body+=chunk.toString();
            });

            req.on("end",()=>{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.end(JSON.stringify({data:body.replace(/[aeiouAEIOU]/g,'*')}));
            })
        }
        

        else{
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end("404 Not Found");
        }
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})