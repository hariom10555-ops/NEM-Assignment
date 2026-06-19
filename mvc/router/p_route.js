const express = require('express');
const { adddata, updatedata, deletedata, showdata } = require('../controller/product');

const route = express.Router();
route.post("/adddata",adddata)
route.patch("/update/:id",updatedata)
route.delete("/delete/:id",deletedata)
route.get("/showdata",showdata)

module.exports = route()