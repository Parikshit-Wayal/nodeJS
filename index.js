const express = require('express');

const app = express();


//hello from server

// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

  res.send('Hello from Nodejs App');

});

