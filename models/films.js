var mongoose = require('mongoose');




var filmSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }

});



var Film = module.exports = mongoose.model('film', filmSchema);

module.exports.getFilms= function(callback, limit){
    Film.find(callback).limit(limit);
}