const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
connectDB()
const app =express()
app.use(express.json())
app.use(express.Router)


app.listen(4000,()=>{
    console.log("running...");
})