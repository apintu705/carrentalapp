import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import carrouter from './routes/carsroutes.js';



dotenv.config()
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/cars",carrouter)




const connect=()=>{
    mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        console.log("connected to server")
    })
    .catch(err=>{
        console.log(err.message)
    })
}



const port=process.env.PORT || 8080;

app.listen(port,async()=>{
    connect();
    console.log(`listening on ${port}`);
})