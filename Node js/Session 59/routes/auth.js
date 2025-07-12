

const express=require('express');
const User = require('../Models/user');
const passport = require('passport');

const router=express.Router()// mini instance


// to show the form of signup
router.get('/register',(req,res)=>{
    res.render('auth/signup');

})

// to actually register a user in my DB
router.post('/register',async (req,res)=>{
    let{username,password,email}=req.body;
    const user=new User({email,username});
    const newUser=await User.register(user,password);
    // res.redirect('/login');

    // user jab signup karege tab hi wo login bhi ho gyega
    req.login(newUser,function(err){
        if(err){return next(err)}
        req.flash('success','Welcome,you are registered successfully')
        return res.redirect('/products');
    })


})

// to show the login form
router.get('/login',(req,res)=>{
    res.render('auth/login');

})

// to actually login via the db

router.post('/login',
    passport.authenticate('local', {
         failureRedirect: '/login',
         failureMessage:'/login'
    }),
    
    (req,res)=>{
        // console.log(req.user);
        req.flash('success','welcome back')
    res.redirect('/products');

})

//logout

router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success','goodbye friends, see you again')
    res.redirect('/login')

})



module.exports=router;