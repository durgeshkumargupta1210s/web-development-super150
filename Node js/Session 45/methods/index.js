const express = require('express');
const app = express();

//get



// specific routes first
app.get('/', (req, res) => {
  res.send('<h1>this is my "/" path</h1>');
});

app.get('/cat', (req, res) => {
  res.send('<h1>this is my "/cat" path</h1>');
});

app.get('/dog', (req, res) => {
  res.send('<h1>this is my "/dog" path</h1>');
});

//  catch-all route at the end
// app.get('*', (req, res) => {
//   res.send('<h1>Bad request try something else</h1>');
// })

app.listen(8080, () => {
  console.log("server connected to port 8080");
});
