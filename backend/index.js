const express = require('express');
const productrouter = require('./routers/productRouter');
require('./config/database').connect()
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use(productrouter)
app.listen(8080,()=>{console.log("listening to port 8080")})