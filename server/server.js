const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// This must be added before GET & POST routes 
app.use(bodyParser.urlencoded({extended:true}))
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let operationHistory = [];

app.get('/operation', (req, res) => {
    res.send(operationHistory);
});

app.post('/operation', (req, res) => {
    const operations = req.body
    console.log(req.body);
    let result;
    
})



app.listen(port, () => {
    console.log('Listening on port', port);
});