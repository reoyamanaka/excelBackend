const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;



// middleware/routing


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});

