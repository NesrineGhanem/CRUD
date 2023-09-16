const {Router} = require("express")
const { getproduct, getproductbyid, addproduct, editproduct, deleteproduct } = require("../controllers/productControll")
const productrouter = Router()

productrouter.get("/product",getproduct)
productrouter.get("/product/:id",getproductbyid)
productrouter.post("/product",addproduct)
productrouter.put("/product/:id",editproduct)
productrouter.delete("/product/:id",deleteproduct)

module.exports= productrouter