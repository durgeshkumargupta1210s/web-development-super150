
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
    },

    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]


})


// middleware jo behind the seen mongodb operations karwane
//  par use hota hai and iske ander pre nad 
// post middleware hote hai which are basically 
// used over the schema and before the model is js class

productSchema.post('findOneAndDelete',async (product)=>{
   if(product.reviews.length>0){
    await Review.deleteMany({_id:{$in:product.reviews}})
   } 
})

let Product=mongoose.model('Product',productSchema);
module.exports=Product;
