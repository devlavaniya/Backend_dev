import express from "express";
import {getAllUsers} from "../controllers/userController.js";

const route=express.Router();
route.get("/user",getAllUsers)

export default route;