const mongoose = require('mongoose');
 
const StudentScheme = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
    },
    Contact:{
        type:String,
        required:true
    },
    Course:{
        type:Number,
        required:true
    },
})
 
const studentModel = new mongoose.model('Student', StudentScheme)

module.exports = studentModel;