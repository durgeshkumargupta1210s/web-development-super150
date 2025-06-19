
const express=require('express')
const app=express();

app.set('view engine','ejs')// view engine ko set kar diya hai taki template dekh pawoo


app.get('/',(req,res)=>{
    // res.send("hii")
    res.render('index');
})



app.listen(8080,()=>{
    console.log("server connected to 8080 port")
})