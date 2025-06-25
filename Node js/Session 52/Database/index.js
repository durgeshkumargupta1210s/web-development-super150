

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
 console.log("Database  not connected ")
 console.log(err)
})
