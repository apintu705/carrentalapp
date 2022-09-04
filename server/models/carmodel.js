import mongoose from 'mongoose';

const carSchema =new mongoose.Schema({
    name:{type:String, required:true}, 
    type:{type:String, required:true},
    image:{type:String, required:true}, 
    payPerDay:{type:Number, required:true}, 
    fuelType:{type:String, required:true},
    bookedTimeSlots:{type:[String],default:[]},
    capacity:{type:Number, required:true},

},{
    versionKey:false,
    timestamps:true
})

export const Car=mongoose.model('cars',carSchema);