const Product = require("./Models/Product");
const { productSchema, reviewSchema } = require("./schema");

const validateProduct = (req, res, next) => {
  let { name, image, price, des } = req.body;
  const { error } = productSchema.validate({ name, image, price, des });
  if (error) {
    return res.render("error");
  }
  next();
};

const validateReview = (req, res, next) => {
  let { rating, comment } = req.body;
  const { error } = reviewSchema.validate({ rating, comment });
  if (error) {
    return res.render("error");
  }
  next();
};

// whether the user is login or not so that we can decide to show product details:-
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You must be signed in first!');
    return res.redirect("/login");
  }
  next();
};

const isSeller=(req,res,next)=>{
  if(!req.user.role){
    req.flash('error', 'You don not have permission!');
    return res.redirect("/products");
  }
  else if(req.user.role!=='seller'){
    req.flash('error', 'You don not have permission!');
    return res.redirect("/products");
  }
  next(); 

}

const isProductAuthor= async (req,res,next)=>{
  let {id}=req.params// product id
  let product=await Product.findById(id);// entire product
  if(!product.author.equals(req.user._id)){

    req.flash('error', 'You don not have permission!');
    return res.redirect("/products");

  }
  next();
}

module.exports = {isProductAuthor,isSeller,isLoggedIn, validateProduct, validateReview };
