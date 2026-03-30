import connection from "./db.js";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app =express();
const port = process.env.PORT || 5000;

app.use("/api",userRoutes);

app.listen(port,()=>{
    console.log("server is running")
})

dotenv.config();

connection();
