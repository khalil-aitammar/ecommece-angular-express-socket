var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');
var config = require('./config');
var app = express();


    var db =mongoose.connect('mongodb://localhost/userstory', function (err) {
    if (err){
        console.log(err);
    }else{
        console.log('connect a la base' + config.datebase);
    }

});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));



app.listen(config.port, function () {
    console.log('running ' +config.port);

    
});