var express = require('express'),
    bodyParser = require('body-parser'),
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


app.use(bodyParser.json());

var Genre =require('./models/genre');
var films =require('./models/films');


app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres');
});


//film

app.get('/api/films', function(req, res){

    films.getFilms(function(err, films){
        console.log("je suis film");
        if(err){
            throw err;
        }
        res.json(films);
        console.log(films);
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