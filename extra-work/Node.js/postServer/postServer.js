const http=require('http');
const querystring=require('querystring');
const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url==='/login' && req.method==='POST'){
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk.toString();
        });
        req.on('end',()=>{
            console.log('Received data:',data);
            const parsedData=querystring.parse(data);
            console.log(parsedData);

            let jsonResponse=JSON.stringify(parsedData);
            console.log('JSON Response:',jsonResponse);

            let final=JSON.parse(jsonResponse);
            console.log('Final Object:',final);
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(jsonResponse);
        });
        return;
    }
    res.end('Hello from server');
});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});