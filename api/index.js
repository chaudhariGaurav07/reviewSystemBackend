import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import dbConnect from "../config/database.js"
import User from "../models/user.js"
import Company from "../models/company.js"
import feedbackRoutes from "../routes/feedbackRoutes.js";

const app = express()
app.use(express.json())
const PORT = 3000;
dotenv.config();

app.use("/api/v1",feedbackRoutes);



//calling 
dbConnect();








app.listen(PORT,()=>{
    console.log(`server is runnin at port ${PORT}`);
})


