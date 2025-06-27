
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        required:true
    } ,
    image:{
        type:String,
        required:true,
        // default:
    } ,
    price: {
        type:Number,
        min:0,
        required:true
    },
    des: {
        type:String,
        trim:true
    }


})

let Product=mongoose.model('Product',productSchema);
module.exports=Product;
