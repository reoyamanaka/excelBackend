const express = require('express');
const bodyParser = require('body-parser');
const updateSheet = require('./updateSheet.js');

const app = express();

const PORT = process.env.PORT || 3000;

// middleware/routing
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
    return res.render('form-with-get');
});

app.get('/form-with-post', (req, res) => {
    return res.render('form-with-post');
});

app.get('/submit-form-with-get', (req, res) => {
    return res.send(req.query);
});

app.post('/submit-form-with-post', (req, res) => {
    updateSheet(req.body.revenue, req.body.cost);
    return res.send(req.body);
});



app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});

