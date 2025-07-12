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
    req.flash('error','Please login first')
    return res.redirect("/login");
  }
  next();
};

module.exports = {isLoggedIn, validateProduct, validateReview };
