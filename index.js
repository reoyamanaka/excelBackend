const express = require('express');
const updateSheet = require('./updateSheet.js');

const app = express();

const PORT = process.env.PORT || 3000;

// middleware/routing
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    return res.send(`A new spreadsheet has been created with the new revenue of ${req.body.revenue} and the new cost of ${req.body.cost}. The newly calculated profit is ${req.body.revenue - req.body.cost}. You can find the newly created spreadsheet called "newDataFile.xlsx".`);
});

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});

