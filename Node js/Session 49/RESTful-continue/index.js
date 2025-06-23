
const express=require('express')
const app=express()
const path=require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');
// dummy array instead of database

let comments=[
    {
        // id:0,
        id:uuid(),// returns a id i.e string
        username:"Durgesh",
        comment: "i am a developer"
    },
    {
        // id:1,
        id:uuid(),
        username:"Namit",
        comment:"i am proficient in dallagiri"
    },

    {
        // id:2,
        id:uuid(),
        username:"Deepti",
        comment:"i am a ladydon in my college"
    },

    {
        // id:3,
        id:uuid(),
        username:"Manasvi",
        comment:"i am a chhotadon in my college"
    },
]

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))// for templating
app.use(express.static(path.join(__dirname,'public'))) // for static files
app.use(express.urlencoded({extended:true}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))// method overiding for post to patch

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
    comments.push({username,comment,id:uuid(),})
    res.redirect('/blogs')
})


// task --4 to show info about 1 particular blog

app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params;// string always
    let foundComment=comments.find((comment)=>{
        return comment.id == id
    })

    res.render('show',{foundComment})
    
})

//  task-5 to get the form for editing the blog

app.get('/blogs/:id/edit',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find((comment)=>{
        return comment.id == id
    })

    res.render('edit',{foundComment})

})

// task--6  aftually editting the form for editing the blog

app.patch('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let foundComment = comments.find((comment) => comment.id === parseInt(id));

    // if (!foundComment) {
    //     return res.status(404).send("Comment not found");
    // }

    let { comment } = req.body;
    foundComment.comment = comment;

    res.redirect('/blogs');
});

// task-7 to delete a blog from the DB
app.delete('/blogs/:id',(req,res)=>{
    let {id}=req.params
    let newArray=comments.filter((comment)=>{return comment.id !=id});
    comments=newArray;
    res.redirect('/blogs')


})



app.listen(8080, ()=>{
    console.log("server connected at 8080 port")
})