

const express=require('express')

const router=express.Router()// mini instance

const Product=require('../Models/Product')

// to show all the products
router.get('/products', async (req,res)=>{
    let products=await Product.find({})
    res.render('./products/index',{products})
})

// to show the form for new product
router.get('/product/new',(req,res)=>{
    res.render('products/new')
})

// to actually add the product
router.post('/products',async (req,res)=>{
    let{name, image, price, des}=req.body 
    // adding product to the data base ..model.create()
    await Product.create({name, image, price, des})
    res.redirect('/products')
})

// show info about one products:-

router.get('/products/:id',async (req,res)=>{
    let {id}=req.params;
    // finding id into database
    let foundProduct=await Product.findById(id);
      res.render('products/show',{foundProduct})
})


// show to edit the product

router.get('/products/:id/edit',async (req,res)=>{
    let {id}=req.params;
    // finding id into database
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct})
})

// to actually edit the data in db

router.patch('/products/:id',async (req,res)=>{
    console.log("PATCH ROUTE HIT"); // Debug marker
    console.log("req.params.id:", req.params.id); // Check if ID is coming
    console.log("req.body:", req.body);

    let {id}=req.params;
    let {name, image, price, des}=req.body;
   await Product.findByIdAndUpdate(id, {name, image, price, des})
   res.redirect(`/products/${id}`);
})


// to delete a product

router.delete('/products/:id',async (req,res)=>{
    let {id}=req.params
    await Product.findByIdAndDelete(id);
    res.redirect('/products')

})


module.exports=router;