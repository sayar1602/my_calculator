const express = require('express');

const app = express();

const ejs  = require('ejs');

app.set('view engine' , 'ejs');

app.use( express.static('public') );

app.get('/' , function(req , res){
    res.render('index');
});

app.listen(5000 , function(err){
    if (err){
        console.log(err);
    }
    console.log('Started on port 5000');
});