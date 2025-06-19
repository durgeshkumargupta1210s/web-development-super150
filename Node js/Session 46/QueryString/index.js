


const express = require('express')
const app = express()


app.get('/search',(req,res)=>{
    // res.send()
    console.log(req.query);// object with key-value pair

    console.log(req.query.search);// key // output:1
    let {search}=req.query// destructuring
    console.log(search) // output :2

    // res.send(req.query)
    // res.send(req.query.search)
    res.send(search)

})

app.listen(8080 , ()=>{
    console.log("connected to 8080 port");
})
