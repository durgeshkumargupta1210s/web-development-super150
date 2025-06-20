const express = require('express');
const app = express();
const path = require('path');

// Setting EJS as the view engine
app.set('view engine', 'ejs');
// Setting the directory where your EJS templates are located
app.set('views', path.join(__dirname, 'views')); // ✅ fixed 'views'

let todos=['go to gym', 'go to club', 'drink water']

// Root route
app.get('/', (req, res) => {
    res.render('index'); // renders views/index.ejs
});

// /random route
app.get('/random', (req, res) => {
    let number=Math.ceil(Math.random()*100)

    res.render('random', {number}); // renders views/random.ejs
});

// show your tast

app.get('/todo',(req,res)=>{
       res.render("todos",{todos}) 
})

// Start the server
app.listen(8080, () => {
    console.log("Server connected to port 8080");
});
