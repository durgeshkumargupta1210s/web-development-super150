
// connceting to the server
const express=require('express');
const app=express();
// connecting to the database
const mongoose = require('mongoose');
const path=require('path');
// seeding database
const seedDB=require('./seed')
// requiring router folder
const productRoutes=require('./routes/product')
// require ejs-mate engine
const ejsmate=require('ejs-mate');
// require method-override for patch request
const methodOverride = require('method-override')

app.engine('ejs',ejsmate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));// views folder
app.use(express.static(path.join(__dirname,'public')));// public folder
app.use(express.urlencoded({extended:true}))// jab code undefined show kare
app.use(methodOverride('_method'))
app.use(productRoutes);// har incoming request ke liye run kare








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