const fs= require("fs")
const url = require("url")
const http = require("http")

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query
    console.log(req.url);
    if(path === "/" && req.method === "GET"){
        res.writeHead(200,{
            "Content-type" : "text/plain"
        })

        res.end("WElcome");
    }
    else if(path === "/about" && req.method === "GET"){
        fs.readFile("./public2/about.html","utf-8",(err,data)=>{
            if(err){
                res.writeHead(500)
                return res.end("server-err")
            }
            res.writeHead(200,{
                "Content-type" : "text/html"
            })
            res.end(data)
        })
    }
    else if(path === "/user" && req.method === "GET"){
        const name = query.name;
        const age = query.age;

        const userData = {
            name: name || "Not provided",
            age: age || "Not provided"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(userData));
    }
    else{
        res.writeHead(404,{
            "Content-type" : "text/html"
        })
        res.end("404 not found")
    }
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})