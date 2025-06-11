


const express = require('express') //  retuns a function
const app = express();// returns an entire new object
// console.log(app);

//ask server to listen to your requests
app.listen(8080,()=>{
    console.log("server connected at port 8080");
});

// app.listen(8080);