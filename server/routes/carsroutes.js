import express from 'express';
import { getallcars, seedrouter } from '../controllers/carcontroller.js';
const carrouter=express.Router();

carrouter.get("/getall",getallcars)
carrouter.get("/",seedrouter)


export default carrouter;