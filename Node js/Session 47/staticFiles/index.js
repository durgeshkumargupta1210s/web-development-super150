const express = require('express');
const app = express();
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// 🔥 Parse POST form data
app.use(express.urlencoded({ extended: true }));

// Home page route
app.get('/', (req, res) => {
    res.render('index');
});//

// GET method
app.get('/user', (req, res) => {
    const { username, age } = req.query;
    res.send(`(GET) Hello ${username}, you are ${age} years old.`);
});

// POST method
app.post('/user', (req, res) => {
    const { username, age } = req.body;
    res.send(`(POST) Hello ${username}, you are ${age} years old.`);
});

// Start server
app.listen(8080, () => {
    console.log("connected to 8080 port");
});
