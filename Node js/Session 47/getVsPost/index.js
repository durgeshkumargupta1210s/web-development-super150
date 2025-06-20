

const express=require('express');
const app=express();
const path=require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))// templating file
app.use(express.static(path.join(__dirname,'public')))//  static files

app.get('/',(request,response)=>{
    response.render('index')
})



app.listen(8080,()=>{
    console.log("server connected at port 8080");
})