const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.get('/userdetails',(req,res)=>{
    try{
        res.status(200).json({
            name:"jagdish",
            age:21,
            city:"Ghaziabad"
        });
    }
    catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }
});

app.get('/delay',(req,res)=>{
    setTimeout(()=>{
        res.send('This response is delayed by 5 seconds');
    },5000);
});

app.get('/error',(req,res)=>{
    res.status(500).send('Internal Server Error');
});

app.get('/redirect',(req,res)=>{
    res.redirect('/');
});

app.get('/info',(req,res)=>{
    res.send(`Request Method: ${req.method}, Request URL: ${req.url}`);
});

app.get('/')


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});