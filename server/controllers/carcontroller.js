import data from "../data.js";
import {Car} from "../models/carmodel.js"

export const getallcars=async(req,res,next)=>{
    const cars=await Car.find();
    res.send(cars)
}

export const seedrouter=async(req, res, next)=>{
    await Car.remove();
    const createcars=await Car.insertMany(data.cars);
    res.send({createcars})
}