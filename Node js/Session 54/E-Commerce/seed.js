

const mongoose=require('mongoose')

const Product=require('./Models/Project')

const products=[
    {
        name: "Iphone 14pro",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
        price: 130000 ,
        des: "Very Costly" ,
    },
    {
        name: "ASUS TUF f15",
        image: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww',
        price: 80000 ,
        des: "Gaming Laptop" ,
    },
    {
        name: "coca cola",
        image: 'https://images.unsplash.com/photo-1606411324897-1cfa6b9336e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww',
        price: 50 ,
        des: "Cold drink" ,

    },
    {
        name: "Dairy Milk",
        image: 'https://images.unsplash.com/photo-1750085036916-e8d0a69252a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpcnltaWxrfGVufDB8fDB8fHww',
        price: 90 ,
        des: "Chocolate" ,
    },
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports=seedDB;
