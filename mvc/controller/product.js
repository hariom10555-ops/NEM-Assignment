const { model } = require('mongoose');
const productmodel = require('../model/p_model');

const adddata = async(req,resp)=>{
    try {
        const data = new studentmodel({
            pname:req,body,pname,
            price:req,body,price,
            category:req,body,category,
            quantity:req,body,quantity
    })
    const result = await productmodelmodel.save()
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async(req,resp)=>{
    try {
    const result = await productmodel.findByIdAndUpdate(req.params.id , req.body,{new:true})
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const daletedata = async(req,resp)=>{
    try {
    const result = await productmodel.findByIdAndUpdate(req.params.id)
    resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const showdata = async(req,resp)=>{
    try {
        const result = await productmodel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {adddata,updatedata,deletedata,showdata}