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


//film

app.get('/api/films', function(req, res){
    film.getfilms(function(err, films){
        if(err){
            throw err;
        }
        res.json(film);
    });
});

app.get('/api/films/:_id', function(req, res){
    film.getfilmById(req.params._id, function(err, film){
        if(err){
            throw err;
        }
        res.json(film);
    });
});

app.put('/api/films/:_id', function(req, res){
    var id = req.params._id;
    var film = req.body;
    film.updatefilm(id, film, {}, function(err, film){
        if(err){
            throw err;
        }
        res.json(film);
    });
});

app.delete('/api/films/:_id', function(req, res){
    var id = req.params._id;
    film.removefilm(id, function(err, film){
        if(err){
            throw err;
        }
        res.json(film);
    });
});








app.listen(config.port, function () {
    console.log('running ' +config.port);

    
});