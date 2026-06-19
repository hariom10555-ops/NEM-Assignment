const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const { name } = require('ejs');
connectDB()
const app =express()
app.use(express.json())

const studentschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rollno:{
        type:Number,
        required:true,
    },
    email:{
        typr:String,
        required:true,
    },
    course:{
        type:String,
        enum:["hindi","english","maths","science"],
        required:true
    }
},{timestamps:true})

const studentmodel = mongoose.model("student",studentschema)

const adddata = async(req,resp)=>{
    try {
        const data = new studentmodel({
            name:req,body,name,
            rollno:req,body,rollno,
            email:req,body,emial,
            course:req,body,course
    })
    const result = await studentmodel.save()
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async(req,resp)=>{
    try {
    const result = await studentmodel.findByIdAndUpdate(req.params.id , req.body,{new:true})
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}


const dateledata = async(req,resp)=>{
    try {
    const result = await studentmodel.findByIdAndUpdate(req.params.id)
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const showdata = async(req,resp)=>{
    try {
        const result = await studentmodel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
}
app.listen(4000,()=>{
    console.log("running...");
    
})