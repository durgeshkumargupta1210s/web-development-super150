

const express=require('express')

const router=express.Router()// mini instance

const Product=require('../Models/Product')
const Review=require('../Models/Review')
const {validateProduct}=require('../middleware');
// to show all the products
router.get('/products', async (req,res)=>{
    try{
    let products=await Product.find({})
    res.render('./products/index',{products})
    }

    catch(e){
       res.status(500).render('error',{err:e.message})
    }
    
})

// to show the form for new product
router.get('/product/new',(req,res)=>{
    try{
        res.render('products/new')
    }
    catch(e){
       res.status(500).render('error',{err:e.message})
    }
})

// to actually add the product
router.post('/products', validateProduct,async (req,res)=>{
    try{
        let{name, image, price, des}=req.body 
    // adding product to the data base ..model.create()
    await Product.create({name, image, price, des})
    res.redirect('/products')
    }

    catch(e){
       res.status(500).render('error',{err:e.message})
    }
    
})

// show info about one products:-

router.get('/products/:id',async (req,res)=>{
    try{
        let {id}=req.params;
    // finding id into database
    // finding id into database and connenct it to the 
    // reveiw array so that particular reveiw also show (populate)
    let foundProduct=await Product.findById(id).populate('reviews');
      res.render('products/show',{foundProduct})
    }

    catch(e){
       res.status(500).render('error',{err:e.message})
    }
})


// show to edit the product

router.get('/products/:id/edit', async (req,res)=>{
    try{
        let {id}=req.params;
    // finding id into database
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct})
    }

    catch(e){
       res.status(500).render('error',{err:e.message})
    }
})

// to actually edit the data in db

router.patch('/products/:id', validateProduct ,async (req,res)=>{
    try{
        console.log("PATCH ROUTE HIT"); // Debug marker
    console.log("req.params.id:", req.params.id); // Check if ID is coming
    console.log("req.body:", req.body);

    let {id}=req.params;
    let {name, image, price, des}=req.body;
   await Product.findByIdAndUpdate(id, {name, image, price, des})
   res.redirect(`/products/${id}`);
    }


    catch(e){
       res.status(500).render('error',{err:e.message})
    }

})


// to delete a product

router.delete('/products/:id',async (req,res)=>{
    try{
        let {id}=req.params
    const product= await Product.findById(id);

    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id);
    // }
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
    }

    catch(e){
       res.status(500).render('error',{err:e.message})
    }


})


module.exports=router;