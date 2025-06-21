

const express=require('express');
const app=express();
const path=require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))// templating file
app.use(express.static(path.join(__dirname,'public')))//  static files

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON data

app.get('/',(request,response)=>{
    response.render('index')
})

app.get('/user',(request,response)=>{
    console.log(request.query)
    let {username,age}=request.query
    response.send(`Hi !! i my name is ${username} and my gae is ${age}`)
    // response.send('<h3>From get method</h3>')
})

app.post('/user',(request,response)=>{
    console.log(request.body)
    let {username,age}=request.body
    response.send(`Hi !! i my name is ${username} and my gae is ${age}`)
    // response.send('<h3>From post method</h3>')
})




app.listen(8080,()=>{
    console.log("server connected at port 8080");
})