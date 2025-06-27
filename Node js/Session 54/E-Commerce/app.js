
// connceting to the server
const express=require('express');
const app=express();


// connecting to the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping-durgesh-app')
.then(()=>{
    console.log("Database connected Successfully")
})
.catch((err)=>{
    console.log("database not connected")
  console.log(err)
})


const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));// views folder
app.use(express.static(path.join(__dirname,'public')));// public folder


// seeding database
const seedDB=require('./seed')
// seedDB()

// requiring router folder

const productRoutes=require('./routes/product')
app.use(productRoutes);// har incoming request ke liye run kare




app.listen(8080,()=>{
    console.log("server connected at port 8080 succesfully")
})