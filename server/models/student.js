var mongoose= require('mongoose');
var Student=mongoose.model('Student',new mongoose.Schema({
    StudentName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
,
    RollNo:  {
        type: Number,
        required: true
    },
    ClassId:  {
        type: String,
        required: true
    },
    DOB:  {
        type: Number,
        required: true
    }

}));

module.exports = {Student};