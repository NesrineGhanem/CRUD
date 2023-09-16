const product = require('../model/product');

module.exports.getproduct = async(req,res)=>{
    const prod = await product.find();
    return(
        res.status(200).json(prod)
    )
}

module.exports.getproductbyid =async (req,res)=>{
    const {id} = req.params
    const prod = await product.findById(id)
    return(
        res.status(200).json(prod)
    )
}

module.exports.addproduct=(req,res)=>{
    const{title,description,price}=req.body
    const prod = new product({
        title,description,price  
    })
    prod.save()
    .then(()=>{return res.status(200).json({msg:"product added"})})
    .catch((e)=>{return res.status(400).json({msg:e.message})})

}


module.exports.editproduct=(req,res)=>{
    const{id} = req.params
    const{title,description,price}=req.body
    product.findByIdAndUpdate(id,{title,description,price})
    .then(()=>{return res.status(200).json({msg:"product updated"})})
    .catch((e)=>{return res.status(400).json({msg:e.message})})
}

module.exports.deleteproduct=(req,res)=>{
    const{id}= req.params
    product.findByIdAndDelete(id)
    .then(()=>{return res.status(200).json({msg:"product deleted"})})
    .catch((e)=>{return res.status(400).json({msg:e.message})})
}


