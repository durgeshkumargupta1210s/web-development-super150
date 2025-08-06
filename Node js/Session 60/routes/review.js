const express=require('express')

const router=express.Router()// mini instance

const Review=require('../Models/Review')
const Product=require('../Models/Product')
const {validateReview}=require('../middleware');



router.post('/products/:id/review', validateReview ,async (req,res)=>{
   try{
     console.log(req.body);
    console.log(req.params);
    let {id}=req.params;
    let{rating, comment}=req.body;
    const product= await Product.findById(id);
    // creating entry in the review database by using js instead of mongodb
    const review= new Review({rating, comment});
    // adding review into product database
    product.reviews.push(review);
   await  review.save();// save data into database
   await product.save();
   req.flash('success','Review Added Successfully')
   res.redirect(`/products/${id}`)
   }
   catch(e){
       res.status(500).render('error',{err:e.message})
    }
    
})

module.exports=router;