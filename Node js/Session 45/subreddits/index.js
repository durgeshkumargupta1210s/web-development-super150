


const express=require('express');
const app=express();

// app.get('/',(req, res)=>{
//    res.send("root route hai");
// })

// app.get('/r/banana',(req, res)=>{
//    res.send("banana route hai");
// })

// app.get('/r/cat',(req, res)=>{
//    res.send("cat route hai");
// })

// infinite route banane pad sakte hai

app.get('/r/:subreddit',(req,res)=>{
     console.log(req.params);// object
     let {subreddit}=req.params;// objact destructuring
     res.send(`<h1> my route was ${subreddit}</h1>`)
})

app.listen(8080,()=>{
    console.log("server connnected at port 8080")
})