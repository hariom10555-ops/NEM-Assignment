const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    pname:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        enum:["phone","laptop","tv","fridge","Ac"],
        required:true,
    },
    quantity:{
        type:Number,
        min:1,
        required:true,
    }
},{timestamps:true})

const productmodel = mongoose.model("product",productschema)

module.exports = productmodel