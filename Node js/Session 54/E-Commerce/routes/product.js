

const express=require('express')

const router=express.Router()// mini instance

const Product=require('../Models/Product')


router.get('/products', async (req,res)=>{
    let products=await Product.find({})
    res.render('./products/index',{products})
})


module.exports=router;