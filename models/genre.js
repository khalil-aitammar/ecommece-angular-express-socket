var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var genreSchema = new Schema({
    name : String,
    description:String,

});

module.exports = mongoose.model('genre',genreSchema);