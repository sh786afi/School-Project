var mongoose= require('mongoose');
var Subject=mongoose.model('Subject',new mongoose.Schema({
    SubjectName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
,
    ClassId:  {
        type: String,
        required: true
    }
}));

module.exports = {Subject};