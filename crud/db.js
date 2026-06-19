const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect("mongoose://localhost:27017/j1_test")
    .then(()=>{
        console.log("connected...");
        
    }).catch((err)=>{
        console.log(err);
    })
}
connectDB()
module.exports = connectDB