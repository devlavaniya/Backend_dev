import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app=express();

app.use(cookieParser('my-super-secret-key'));

app.get('/set-cookie',(req,res)=>{

    let user={
        name:"rohan",
        email:"rohan@example.com"
    };
    const token =jwt.sign(user,"qwertyuiop",{expiresIn:"1h"});
    console.log(token);

    res.cookie("token",token,{httpOnly:true});
    res.send('Cookie has been set!');
});
const authMiddleware=(req,res,next)=>{
    if(!req.cookies.token){
        res.send("Invalid user");
        return;
    }
    const token=req.cookies.token;
    const decode=jwt.verify(token,"qwertyuiop");

    req.user=decode;

        next();
}

app.get('/get-cookie', authMiddleware,(req,res)=>{
    const decode=req.user;
    console.log(decode);
    res.send(`Cookie value: ${decode.name}`);
});


app.get('/profile',authMiddleware,(req,res)=>{
    const decode = req.user;
    console.log(decode);
    res.send(`Welcome to your profile, ${decode.name}!`);
});

app.get('/logout',authMiddleware,(req,res)=>{
    res.clearCookie('token');
    res.send('You have been logged out');
})

app.listen(3000,()=>console.log("Server is running on port 3000"));