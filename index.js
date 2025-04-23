const express = require('express');

const app = express();



// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

  res.send('Hello from Nodejs App');


});
module.exports=app;
