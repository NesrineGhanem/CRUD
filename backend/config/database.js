const mongoose = require("mongoose");

const connect = ()=>{
    mongoose
    .connect("mongodb://127.0.0.1:27017/product")
    .then(()=>{console.log("connect to port 8080")})
    .catch((e)=>{
        console.log(e);
        process.exit(1)
    })
}
module.exports.connect =connect