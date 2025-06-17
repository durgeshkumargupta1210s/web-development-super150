


const express=require('express');
const App=express();


// adding app.use
// without path i.e for all incoing request
// App.use((req,res)=>{ // middleware function//  accept call bak function
//     // console.log(req);
//     // console.log(res);
//     // console.log("you made a request durgesh ")
//     res.send('<h1>I am sending response</h1>')// sending response

// })

// with path i.e for specific path only and not in otheer cases

App.use('/middleware',(req,res)=>{ // middleware function//  accept call bak function
    // console.log(req);
    // console.log(res);
    console.log("you made a request at specific middleware ")
    res.send('<h1>using path in app.use() method</h1>')// sending response

})


App.listen(8080,()=>{
    console.log("server connected to port 8080")
})