

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("data base connected successfully")
})
.catch((err)=>{
    console.log("not connected ")
    console.log(err);
})


// scheema (blueprint)

const movieSchema= new mongoose.Schema({
    name:String,
    rating:Number,
    year:Number,
    isWatched:Boolean
})

// model (js object)---> collection for database

const Movie=mongoose.model('Movie',movieSchema)// js class
// console.log(Movie);

// making a new object
let ironman=new Movie({
    name: "ironman",
    rating: "7.8",
    year:2014,
    isWatched:true
})

ironman.save()// save the data in database permanently

console.log(ironman)


