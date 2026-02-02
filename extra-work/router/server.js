import express from 'express';
import userRouter from './userRouter.js';
const port=3000;
const app = express();

app.use(express.json())
app.use('/', userRouter);    



app.listen(port,()=>{
    console.log("server is running");
});

