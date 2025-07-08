

const {productSchema,reviewSchema}=require('./schema')

const validateProduct=(req,res,next)=>{
    let {name,image,price,des}=req.body;
    const {error}=productSchema.validate({name,image,price,des});
    if(error){
        return res.render('error');
    }
    next();


}

const validateReview=(req,res,next)=>{
    let {rating,comment}=req.body;
    const {error}=productSchema.validate({rating,comment});
    if(error){
        return res.render('error');
    }
    next();


}

module.exports={validateProduct,validateReview}