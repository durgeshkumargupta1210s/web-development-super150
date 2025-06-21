
const express=require('express')
const app=express()
const path=require('path')

// dummy array instead of database

let comments=[
    {
        id:0,
        username:"Durgesh",
        comment: "i am a developer"
    },
    {
        id:1,
        username:"Namit",
        comment:"i am proficient in dallagiri"
    },

    {
        id:2,
        username:"Deepti",
        comment:"i am a ladydon in my college"
    },

    {
        id:3,
        username:"Manasvi",
        comment:"i am a chhotadon in my college"
    },
]

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))// for templating
app.use(express.static(path.join(__dirname,'public'))) // for static files
app.use(express.urlencoded({extended:true}));

// root
app.get('/',(req,res)=>{
    res.send("setup completed ..")
})

// task--1 display all the blogs
app.get('/blogs',(req,res)=>{
      res.render('index',{comments});
})

// task--2 show form to make new pages

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

// task--3 to actually add a blog in the data base

app.post('/blogs' ,(req,res)=>{
       console.log(req.body);
    //    res.send("data found");
    let {username,comment}=req.body
    comments.push({username,comment,id:comments.length})
    res.redirect('/blogs')
})


// task --4 to show info about 1 particular blog

app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find((comment)=>{
        return comment.id == id
    })

    res.render('show',{foundComment})
     

})



app.listen(8080, ()=>{
    console.log("server connected at 8080 port")
})