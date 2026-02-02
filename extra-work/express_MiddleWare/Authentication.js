import express from 'express';
const app=express();
const port=3000;
let  logfun=(req,res,next)=>{
    let logText=`timestamp: ${new Date().toString()} url ${req.url} method ${req.method} \n`
    fs.appendFileSync("log.txt",logText);
    console.log(logText);
    next();
}
let  Authentication=(req,res,next)=>{
    const {name,Password}=req.body;
    if(!name || !Password){
        return res.status(400).json({
            message:"name and password are required"
        });
    }
    if(Password.length<6){
        return res.status(400).json({
            message:"password must be at least 6 characters long"
        });
    }
    next();
}

export {logfun,Authentication};