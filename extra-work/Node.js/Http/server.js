const http=require('http');
// const server=http.createServer((req,res)=>{
//    console.log("url"+req.url);
//    console.log("method"+""+req.method);
//    res.writeHead(200,{'Content-Type':'text/plain','userInfo':'MyNodeServer'});
//    res.end('Hello World');
// });

// const server=http.createServer((req,res)=>{
//     if(req.url==='/home'){
//         let user={
//             name:'John Doe',
//             age:30
//         }
//         res.writeHead(200,{'content-type':'application/json'});
//         res.end(JSON.stringify(user))
//     }
//     else{
//         res.end('Invalid Request');
//         return;
//     }


// });
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('./public/home.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{'content-type':'text/html'})
            }
        res.end('<h1>Welcome Home Page</h1>')
        } );
    }
    else if(req.url==='/about'){
        fs.readFile('./public/about.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{'content-type':'text/html'});
                res.end('<h1>About Page</h1>');
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }
        })
        res.end('<h1>About Page</h1>');
    }
    else if(req.url==='/user'){
        fs.readFile('./public/user.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{'content-type':'text/html'});
                res.end('<h1>User Page</h1>');
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }
        })
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
         res.end('<h1>404 Page Not Found</h1>');
    }
   
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})