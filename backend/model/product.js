const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   title:{
    type:String,
    require:true,
    unique:true
   },
   description:{
    type:String,
    require:true
   },
   price:{
    type:Number,
    default:10
   }
})

module.exports= mongoose.model("product",productSchema)