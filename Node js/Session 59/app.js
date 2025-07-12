
// connceting to the server
const express=require('express');
const app=express();
// connecting to the database
const mongoose = require('mongoose');
const path=require('path');
// seeding database
const seedDB=require('./seed')
// require ejs-mate engine
const ejsmate=require('ejs-mate');
// require method-override for patch request
const methodOverride = require('method-override')
// requiring product routes
const productRoutes=require('./routes/product')
// requiring review routes
const reviewRoutes=require('./routes/review')
// requiring authorisation routes
const authRoutes=require("./routes/auth")
// for message popup
const flash=require('connect-flash')
// for session storage
const session =require('express-session')
const passport=require('passport');
const LocalStrategy=require('passport-local')
// user defined in models
const User=require('./Models/user');

app.engine('ejs',ejsmate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));// views folder
app.use(express.static(path.join(__dirname,'public')));// public folder
app.use(express.urlencoded({extended:true}))// jab code undefined show kare
app.use(methodOverride('_method'))
// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
     secure: true,
     httpOnly:true,
     expires:Date.now()+24*7*60*60*1000,
     maxAge:24*7*60*60*1000

  }
}))
app.use(flash());

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//we can access these anywhere in the filess
app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})
// Password
passport.use(new LocalStrategy(User.authenticate()));

app.use(productRoutes);// har incoming request ke liye run kare
app.use(reviewRoutes);
app.use(authRoutes);











mongoose.connect('mongodb://127.0.0.1:27017/shopping-durgesh-app')
.then(()=>{
    console.log("Database connected Successfully")
})
.catch((err)=>{
    console.log("database not connected")
  console.log(err)
})

// seedDB()


app.listen(8080,()=>{
    console.log("server connected at port 8080 succesfully")
})