
const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    // cart may have the ids of multiple products so it will be array
    cart:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:'Product'
        }
    ]

});

userSchema.plugin(passportLocalMongoose);

let User=mongoose.model('User',userSchema);
module.exports=User;
