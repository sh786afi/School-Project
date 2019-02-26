var mongoose= require('mongoose');
var Class=mongoose.model('ClassRoom',new mongoose.Schema({
    ClassName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
,
    CapcityOfStudent:  {
        type: Number,
        required: true
    }
}));

module.exports = {Class};