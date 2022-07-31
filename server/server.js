const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// This must be added before GET & POST routes 
app.use(bodyParser.urlencoded({extended:true}))
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let calculationsArray = [];

// function to convert calculator display to functioning formula 
// SWITCH STATEMENT? 



app.listen(port, () => {
    console.log('Listening on port', port);
});