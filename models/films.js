var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var filmSchema = new Schema({
    name : String,
    description:String,
    genre:{ type:String,required:true},
    password:{type:String,required:true},
    create_date:{type: Date, default: Date.now},
    url_img:String
});

module.exports = mongoose.model('film',filmSchema);